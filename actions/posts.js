import * as ActionTypes from '../ActionTypes';

export function setPost(payload){
  return {
    type: 'SET_POST_LIST',
    payload: payload
  }

}

export default function posts(){
  return {
    type: ActionTypes.GET_POST_LIST
  }
}