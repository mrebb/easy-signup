// Actions for User reducer
export const CREATE = 'CREATE';

//Action creators for user signup reducer

//This is called by components as user signup process iterates through all steps untill all done
export const createUser=(user)=>{
  return {
    type:CREATE,
    payload: user,
  };
};
