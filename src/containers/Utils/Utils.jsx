export const checkForValidInput = (data,name)=>{
  if(name==='creditCardExpiry'){
    return false;
  }
  else if(isNaN(data)){
    return true;
  }
  else{
    return false;
  }
};

export const checkForDataLength = (data,dataLength,name)=>{
  if(name==='accountNumber' || name==='transitNumber'){
    return false;
  }
  else if(data.toString().replace(/\s/g, '').length!==dataLength){
    return true;
  }
  else{
    return false;
  }
};