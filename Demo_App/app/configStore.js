import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
function todos(state = [], action) {
  switch (action.type) {
    case 'userInfo':
      return state.concat([ action.text ])
    default:
      return state
  }
}
export default function configureStore(initialState) {
  return createStore(
    todos,
    initialState,
    applyMiddleware(thunk)
  )
}
