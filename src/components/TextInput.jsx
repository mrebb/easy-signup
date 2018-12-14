import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = props=> {
  const {label,value,name,onChange} = props;
  return (
    <TextField
      type="email"
      label={label}
      className="text-field"
      maxLength="50"
      value={value || ''}
      style={{margin:'2%',flexBasis:650}}
      name={name}
      onChange={onChange}
    />
  );
  
};

export default TextInput;