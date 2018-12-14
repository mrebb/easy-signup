// Actions for users reducer
export const SAVE = 'SAVE';
const uuid = require('uuid/v1');

//Action creators for users reducer

// Save the user finally
export const saveUser=(data)=>{
  const user = {...data};
  user.id = uuid();
  return {
    type:SAVE,
    payload: user,
  };
};