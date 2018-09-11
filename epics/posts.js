import { Observable } from 'rxjs/Observable';
import { replace } from 'react-router-redux';
import * as ActionTypes from '../ActionTypes';
import { ajax } from 'rxjs/observable/dom/ajax';
import { setPost } from '../actions/posts';

export default function getPosts(action$) {

  console.log(action$.ofType(ActionTypes.GET_POST_LIST));
  return action$.ofType(ActionTypes.GET_POST_LIST)
    .switchMap(() =>
          Observable.merge(
          ajax.getJSON('https://jsonplaceholder.typicode.com/posts/')
            .map(res => setPost(res))
        )
    );
};
