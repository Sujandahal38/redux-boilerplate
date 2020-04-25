import {  FETCH_POST, ADD_POST} from './types';
import Axios from 'axios'

export const fetchPosts = () => dispatch =>  {
  Axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    dispatch({
     type: FETCH_POST,
     payload: res.data,
    })
  }).catch((err) => {
   console.log(err);
  })
 };


 