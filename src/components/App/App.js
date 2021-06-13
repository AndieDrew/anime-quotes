import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import QuoteArea from '../QuoteArea/QuoteArea'
import { getQuote } from '../../util/api-calls'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      animeQuote: null,
    }
  }

  componentDidMount() {
    getQuote()
      .then(data => {
        this.setState({animeQuote: data})
      })
  }

  render() {
    return (

      <main className = 'App'>
        <Header/>
          <Switch>
            <Route exact path ='/'
              render={() => (
                !this.state.animeQuote ?
                <h1>Loading</h1>

                : this.state.animeQuote &&
                <QuoteArea animeQuote={ this.state.animeQuote }/>
              )}
              />
          </Switch>
      </main>
         
    )
  }
}

export default App

