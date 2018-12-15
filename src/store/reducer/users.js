import { SAVE } from '../actions/users-action.js';

const initialState = JSON.parse(window.localStorage.getItem('users')) || [];
/**
 *
 * signup reducer for handling adding new user to users array
 * @export users reducer
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns updated state
 */
export default function reducer(state =  initialState, action) {
  let { type, payload } = action;
  
  switch (type) {
  case SAVE: {
    Object.keys(payload).forEach(key=>{
      if(key==='password'){
        payload[key]=btoa(payload[key]);
        delete payload['confirmPassword'];
      }
    });
    const users = [...state,payload];
    window.localStorage.setItem('users', JSON.stringify(users));
    return [...users];
  }

  default:
    return state;
  }
}
