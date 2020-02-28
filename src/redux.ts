import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'

type beer = {
  id: number
  name: string
}

type beers = beer[]

const beerReducer = (beers: beers = [], action: any) => { // counter is the initial state of this reducer
  console.log('beer reducer: ', beers)
  switch (action.type) {
    case 'ADD': return action.beers
    default: return beers
  }
}

const navHistoryReducer = (nav = '', action: any) => {
  console.log('nav history reducer: ', nav)
  return nav
}

const combinedReducer = combineReducers({ beers: beerReducer, nav: navHistoryReducer })

let store = createStore(combinedReducer, composeWithDevTools())

export default store
