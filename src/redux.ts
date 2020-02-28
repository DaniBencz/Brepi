import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'

/* let initState = {
  counter: 0,
  tags: []
} */

const counterReducer = (counter = 1, action: any) => { // counter is the initial state of this reducer
  //console.log('counter reducer: ', counter)
  switch (action.type) {
    case 'SET': return action.amount
    case 'INCREASE': return action.amount ? counter + action.amount : counter + 1
    case 'RESET': return 0
    case 'DECREASE': return action.amount ? counter - action.amount : counter - 1
    default: return counter
  }
}

const tagReducer = (tags = ['blue', 'bold', 'hipster'], action: any) => {
  //console.log('tags reducer: ', tags)
  switch (action.type) {
    case 'ADD_TAG':
      if (tags.indexOf(action.tag) === -1) return [...tags, action.tag]
      return tags
    case 'REMOVE_TAG':
      let index = tags.indexOf(action.tag)
      let toReturn = [...tags]
      toReturn.splice(index, 1)
      return toReturn
    case 'REMOVE_TAGS': return []
    default: return tags
  }
}

const combinedReducer = combineReducers({ counter: counterReducer, tags: tagReducer })

let store = createStore(combinedReducer, composeWithDevTools())

export default store

// store.dispatch({ type: 'SET', amount: 6 });
// store.dispatch({ type: 'INCREASE' });
// store.dispatch({ type: 'INCREASE', amount: 2 });
// store.dispatch({ type: 'RESET' });
// store.dispatch({ type: 'INCREASE' });
// store.dispatch({ type: 'DECREASE', amount: 4 });
// This should change the counter's value: 6, 7, 9, 0, 1, -3

// store.dispatch({ type: 'ADD_TAG', tag: 'blue' });
// store.dispatch({ type: 'ADD_TAG', tag: 'bold' });
// store.dispatch({ type: 'ADD_TAG', tag: 'hipster' });
// store.dispatch({ type: 'REMOVE_TAG', tag: 'blue' });
// store.dispatch({ type: 'ADD_TAG', tag: 'bold' });
// store.dispatch({ type: 'REMOVE_TAGS' });
// This should change the tag list's value: ['blue'], ['blue', 'bold'], ['blue', 'bold', 'hipster']
// ['bold', 'hipster'], ['bold', 'hipster'], []

// console.log('final state: ', store.getState())
