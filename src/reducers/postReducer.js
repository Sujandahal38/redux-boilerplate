 import {  FETCH_POST, ADD_POST} from '../actions/types';

 const initalState = {
  items: [],
  item : {},
 }

 export default function (state = initalState,action) {
   switch(action.type) {
    case FETCH_POST : 
    return {
     ...state,
     items: action.payload,
    }
    default: 
    return state;
   }
 }