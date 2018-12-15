import React from 'react';
import TextField from '@material-ui/core/TextField';

/**
  * @param {props} 
  * Text input component for email fields
  * @return text input field with given props 
  */
const TextInput = props=> {
  const {label,value,name,onChange} = props;
  return (
    <TextField
      type="email"
      label={label}
      className="text-field"
      inputProps={{maxLength:50}}
      value={value || ''}
      style={{margin:'2%',flexBasis:650}}
      name={name}
      onChange={onChange}
    />
  );
  
};

export default TextInput;