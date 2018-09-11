import * as ActionTypes from '../ActionTypes';

export function setPost(payload){
  console.log('Inside setPost method',payload)
  return {
    type: 'SET_POST_LIST',
    payload: payload.splice(0,6)
  }

}

export default function posts(){
  console.log('reached actions')
  return {
    type: ActionTypes.GET_POST_LIST
  }
}