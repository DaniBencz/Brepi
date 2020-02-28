import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Custom from './components/Custom'
import Beers from './components/Beers'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <p>Home</p>
          </Route>
          <Route path='/beers'>
            <Beers/>
          </Route>
          <Route path='/orders'>
            <p>Orders</p>
          </Route>
          <Route path='/:id'>
            <Custom name='asd' />
          </Route>
          <Route>
            <p>404</p>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
