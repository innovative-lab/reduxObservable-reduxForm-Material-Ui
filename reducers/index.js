import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import formListReducer from './form'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  postList: posts,
  formList: formListReducer,
  form: formReducer
})
