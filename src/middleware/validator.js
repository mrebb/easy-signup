// Sample Middleware Validator before performing state changes
// More validations can be implemented in future

const validator = store=>next=>action=> {
  if(action.type==='CREATE'){
    if(!action.payload){
      alert('payload missing');
    }
    else{
      let result = next(action);
      return result;
    }
  }
  else{
    let result = next(action);
    return result;
  }
};
 
export default validator;
