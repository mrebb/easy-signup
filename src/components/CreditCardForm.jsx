import React, { Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';

/**
  * @param {props} 
  * Generates custom input format with as per regex script in mask field
  * Third party library to handle format on text input fields
  */
const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/[0-1]/, /[0-9]/, '/', /[2-3]/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
};
/**
  * @param {props} 
  * Credit Card form for 'credit card' payment method 
  */
const CreditCardForm = (props)=>{
  return(
    <Fragment>
      <InputLabel style={{ margin: ' 2%', fontWeight: '900' }}>
                CREDIT CARD INFORMATION
      </InputLabel>
      <br />
      <TextField
        required
        label="CREDIT CARD NUMBER"
        type="text"
        className="text-field"
        id="creditCardNumber"
        inputProps={{maxLength:16}}
        error={props.iscreditCardNumberInvalid===true}
        helperText={props.iscreditCardNumberInvalid?'Enter 16 digit card number':''}
        value={props.creditCardNumber || ''}
        name="creditCardNumber"
        style={{ margin: '2%', flexBasis: 650 }}
        onChange={props.onChange}
      />
      <br />
      <TextField
        required
        label="NAME ON CREDIT CARD"
        type="text"
        className="text-field"
        id="nameOnCreditCard"
        inputProps={{maxLength:50}}
        value={props.nameOnCreditCard || ''}
        name="nameOnCreditCard"
        style={{ margin: '2%', flexBasis: 650 }}
        onChange={props.onChange}
      />
      <br />
      <TextField
        required
        label="EXPIRY (MM/YYYY)"
        placeholder="MM/YYYY"
        className="text-field"
        id="creditCardExpiry"
        error={props.iscreditCardExpiryInvalid===true}
        helperText={props.iscreditCardExpiryInvalid?'Enter valid expiry date in (MM/YYYY) format':''}
        name="creditCardExpiry"
        style={{ margin: '2%', flexBasis: 310 }}
        InputProps={{
          inputComponent: TextMaskCustom,
          value:props.creditCardExpiry,
          onChange: props.handleChange('creditCardExpiry'),
        }}
      />
      <br />
      <TextField
        required
        label="CVC"
        type="text"
        className="text-field"
        error={props.iscvcInvalid===true}
        helperText={props.iscvcInvalid?'Enter 3 digit CVC code':''}
        id="cvc"
        inputProps={{maxLength:3}}
        value={props.cvc || ''}
        name="cvc"
        style={{ margin: '2%', flexBasis: 310 }}
        onChange={props.onChange}
      />
    </Fragment>
  );
};
export default CreditCardForm;