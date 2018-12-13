// Actions for User reducer
export const ADD = 'ADD';

//Action creators for User reducer
export const addUser=(user)=>{
  return {
    type:ADD,
    payload: user,
  };
};