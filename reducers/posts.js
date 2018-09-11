import * as ActionTypes from '../ActionTypes';

const initialState = {
  postList:null
};
export default function setPosts(state = initialState, action) {
  switch (action.type) {
    case 'SET_POST_LIST':
      return {
        postList: action.payload
      };
    default:
      return state;
  }
}
