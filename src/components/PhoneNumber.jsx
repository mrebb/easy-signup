import React, { Fragment } from 'react';
import MaskedInput from 'react-text-mask';
import TextField from '@material-ui/core/TextField';

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      // showMask
    />
  );
};

const PhoneNumberField = props => {
  const { phoneNumber,onChange,isNumberInvalid } = props;
  return(
    <Fragment>
      <TextField
        required
        label="PHONE NUMBER"
        className="text-field"
        id="phoneNumber"
        placeholder="(XXX)-XXX-XXXX"
        name="phoneNumber"
        error= {isNumberInvalid===true}
        helperText={isNumberInvalid?'Invalid Phone Number':''}   
        style={{margin:'2%',flexBasis:650}}
        InputProps={{
          inputComponent: TextMaskCustom,
          value:phoneNumber,
          onChange: onChange('phoneNumber'),
        }}
      />
    </Fragment>
  );
};


export default PhoneNumberField;
