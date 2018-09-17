import * as ActionTypes from '../ActionTypes';

const initialState = {
  postList: []
};
export default function setPosts(state = initialState, action) {
  switch (action.type) {
    case 'SET_POST_LIST':
      return {
        ...state,
        postList: action.payload
      };
    default:
      return state;
  }
}
