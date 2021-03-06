import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Header from "../Header/Header"
import QuoteArea from "../QuoteArea/QuoteArea"
import Favorites from "../Favorites/Favorites"
import { getQuote } from "../../util/api-calls"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      animeQuote: null,
      favorites: [],
      error: null,
    }
  }

  componentDidMount() {
    getQuote()
      .then((data) => {
        this.setState({ animeQuote: data })
      })
      .catch((error) => this.setState({ error: error }))
  }

  addToFavorites() {
    if (!this.state.favorites.includes(this.state.animeQuote)) {
      this.setState({
        favorites: [...this.state.favorites, this.state.animeQuote],
      });
    }
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !this.state.animeQuote && !this.state.error ? (
                <h1 className="loading">Loading</h1>
              ) : this.state.error ? (
                <h1 className="error">Something went wrong!</h1>
              ) : (
                this.state.animeQuote && (
                  <div>
                    <QuoteArea animeQuote={this.state.animeQuote} />
                    <button
                      className="newQuoteBtn"
                      onClick={() => this.componentDidMount()}
                    >
                      New Quote
                    </button>
                    <button
                      className="favoriteBtn"
                      onClick={() => this.addToFavorites()}
                    >
                      Favorite
                    </button>
                  </div>
                )
              )
            }
          />
          <Route
            exact
            path="/favorites"
            render={() => <Favorites favoritesArray={this.state.favorites} />}
          />
        </Switch>
      </main>
    )
  }
}

export default App;
