import { SAVE } from '../actions/users-action.js';

const initialState = JSON.parse(window.localStorage.getItem('users')) || [];
/**
 *
 * signup reducer to handle adding new user to users array
 * @export users reducer
 * @param {data from localStorage if available} [state=initialState]
 * @param {action sent by users action creator} action
 * @returns updated state with list of users signed up
 */
export default function reducer(state =  initialState, action) {
  let { type, payload } = action;
  
  switch (type) {
  case SAVE: {

    /*********DANGER: Do not use this approach in production. This is just temporary***********/
    
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
