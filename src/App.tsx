import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, NavLink, Route, useParams } from 'react-router-dom'

function Hello({ name }: { name: string }) {
  let { id } = useParams();
  return (
    <p>Hello komponens {id} {name}</p>
  )
}

function App() {
  return (
    <Router>
      <div>
        <p>Hello</p>
        <NavLink to='/' className='nav-link' activeClassName='selected' exact>Home-ra</NavLink>
        <NavLink to='/hello/1' className='nav-link' activeClassName='selected'>Hello-ra</NavLink>
        <NavLink to='/world' className='nav-link' activeClassName='selected'>World-re</NavLink>
        <NavLink to='/chat' className='nav-link' activeClassName='selected'>Chat-re</NavLink>
      </div>
      <Switch>
        <Route path='/' exact>
          <p>Default komponens</p>
        </Route>
        <Route path='/hello/:id'>
          <Hello name='asd' />
        </Route>
        <Route path='/world'>
          <p>world</p>
        </Route>
        <Route>
          <p>404</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
