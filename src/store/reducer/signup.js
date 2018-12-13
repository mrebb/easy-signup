
import {ADD} from '../actions/signup-action.js';

const initialState = JSON.parse(window.localStorage.getItem('user')) || {isLoggedIn: false,username:null} ;

/**
 *
 * auth reducer for handling auth state
 * @export auth reducer
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns updated state
 */
export default function reducer (state = initialState, action) {

  let {type, payload} = action;

  switch(type) {
  case ADD: {
    const token = {isLoggedIn: true, username:payload.username};
    window.localStorage.setItem(
      'user',
      JSON.stringify(token)
    );
    return {...state, ...payload};
    
  }
  
  default: return state;
  }
};