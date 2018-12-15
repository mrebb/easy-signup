import React, { Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { financialInstitutionNames } from '../data/Constants';

/**
  * @param {props} 
  * EFT Bank Account form for 'EFT' payment method 
  */
const EFT = (props)=>{
  return(
    <Fragment>
      <InputLabel style={{ margin: ' 2%', fontWeight: '900' }}>
            EFT CREDIT INFORMATION
      </InputLabel>
      <br />
      <TextField
        required
        select
        label="FINANCIAL INSTITUTION NAME"
        name="financialInstitutionName"
        className="text-field"
        id="financialInstitutionName"
        inputProps={{maxLength:50}}
        style={{ margin: '2%', flexBasis: 650 }}
        value={props.financialInstitutionName || 'BANK OF NOVA SCOTIA'}
        onChange={(event)=>props.onChange(event)}
      >
        {financialInstitutionNames.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <TextField
        required
        label="BANK BRANCH ADDRESS"
        type="text"
        className="text-field"
        id="bankBranchAddress"
        placeholder="123 main street.."
        value={props.bankBranchAddress || ''}
        inputProps={{maxLength:150}}
        name="bankBranchAddress"
        style={{ margin: '2%', flexBasis: 650 }}
        onChange={(event)=>props.onChange(event)}
      />
      <br />
      <TextField
        required
        label="ACCOUNT NUMBER"
        className="text-field"
        id="accountNumber"
        type="text"
        inputProps={{maxLength:20}}
        error={props.isaccountNumberInvalid===true}
        helperText={props.isaccountNumberInvalid?'Enter Numeric values(0-9)':''}
        value={props.accountNumber}
        onChange={(event)=>props.onChange(event)}
        name="accountNumber"
        style={{ margin: '2%', flexBasis: 310 }}
      />
      <br />
      <TextField
        required
        label="TRANSIT NUMBER"
        className="text-field"
        id="transitNumber"
        type="text"
        inputProps={{maxLength:20}}
        error={props.istransitNumberInvalid===true}
        helperText={props.istransitNumberInvalid?'Enter Numeric values(0-9)':''}
        value={props.transitNumber}
        onChange={(event)=>props.onChange(event)}
        name="transitNumber"
        style={{ margin: '2%', flexBasis: 310 }}
      />
    </Fragment>
  );
};
export default EFT;