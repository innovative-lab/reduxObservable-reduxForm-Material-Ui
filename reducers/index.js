import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  postList: posts,
  form: formReducer
})
