import { combineReducers } from 'redux'
import ReviewReducer from './ReviewReducer'

const rootReducer = combineReducers({
  reviews: ReviewReducer,
})

export default rootReducer
