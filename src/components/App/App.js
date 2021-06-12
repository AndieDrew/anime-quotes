import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import QuoteArea from '../QuoteArea/QuoteArea'
import getQuote from '../../util/api-calls.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
   
  }

  render() {
    return (

      <main className = 'App'>
        <Header/>
          <Switch>
            <Route exact path ='/'
              render={() => (
                <QuoteArea/>
              )}
              />
          </Switch>
      </main>
         
    )
  }
}

export default App

