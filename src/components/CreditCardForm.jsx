import React, { Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

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
        type="number"
        className="text-field"
        id="creditCardNumber"
        inputProps={{maxLength:16}}
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
        type="text"
        className="text-field"
        id="creditCardExpiry"
        inputProps={{maxLength:7}}
        value={props.creditCardExpiry || ''}
        name="creditCardExpiry"
        style={{ margin: '2%', flexBasis: 310 }}
        onChange={props.onChange}
      />
      <br />
      <TextField
        required
        label="CVC"
        type="text"
        className="text-field"
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