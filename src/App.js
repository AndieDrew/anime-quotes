import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
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

      <Switch>
        <Route exact path ='/'
          render={() => (
                      <main className = 'App'>
                      <h1>Hello World!</h1>
                  </main>
          )}
          />
      </Switch>

    )
  }
}

export default App

