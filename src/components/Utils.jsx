import React from 'react';
import MaskedInput from 'react-text-mask';


export const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={generateRegEx(50)}
      placeholderChar={'\u2000'}
    />
  );
};

export function generateRegEx(maxLength){
  let arr = [];
  let i=0;
  while(i<maxLength){
    arr.push(/\d/);
    i++;
  }
  return arr;
}