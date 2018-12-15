import { CREATE } from '../actions/signup-action.js';
import userSignupFields from '../../data/UserSignUpFields.json';

const initialState = {};
/**
 *
 * signup reducer for handling user signup state
 * @export signup reducer
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns updated state
 */
export default function reducer(state = initialState, action) {
  
  const { type, payload } = action;
  
  switch (type) {

  case CREATE: {
    const data = { ...payload };
    const user = {};
    Object.keys(userSignupFields).forEach(key => {
      if (data[key]) {
        user[key] = data[key];
      }
    });
    if(user['paymentMethod']==='EFT (DIRECT DEBIT)'){
      user['creditCardNumber']='';
      user['nameOnCreditCard']='';
      user['creditCardExpiry']='';
      user['cvc']='';
    }
    else if(user['paymentMethod']==='CREDIT CARD'){
      user['financialInstitutionName']='';
      user['bankBranchAddress']='';
      user['accountNumber']='';
      user['transitNumber']='';
    }
    return { ...state, ...user };
  }

  default:
    return state;
  }
}
