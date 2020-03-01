import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
// eslint-disable-next-line
import { beers } from './custom-types'

const beerReducer = (beers: beers = [], action: any) => { // counter is the initial state of this reducer
  console.log('beer reducer: ', beers)
  switch (action.type) {
    case 'ADD': return action.beers
    default: return beers
  }
}

const pageReducer = (page: number = 1, action: any) => {
  console.log('page reducer: ', page)
  switch (action.type) {
    case 'CHANGE':
      if (action.page > 0) return action.page
      return page
    default: return page
  }
}

const combinedReducer = combineReducers({ beers: beerReducer, page: pageReducer })

let store = createStore(combinedReducer, composeWithDevTools())

export default store
