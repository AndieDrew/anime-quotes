import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
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
                <h1>Hello World!</h1>
              )}
              />
          </Switch>
      </main>
         
    )
  }
}

export default App

