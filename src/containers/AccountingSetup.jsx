import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { paymentMethods, requestedTerms } from '../data/Constants';
import EFT from '../components/EFTForm';
import CreditCardForm from '../components/CreditCardForm';
import ButtonsGroup from '../components/ButtonsGroup';
import FormHeader from '../components/FormHeader';
import { checkForValidInput, checkForDataLength } from './Utils/Utils';
import {AccountSetupInitialState} from './Utils/Utils';

class AccountingSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: this.props.user.paymentMethod || 'EFT (DIRECT DEBIT)',
      requestedTerms: this.props.user.requestedTerms || 'NET 14',
      accountingEmail: this.props.user.accountingEmail || '',
      financialInstitutionName:
        this.props.user.financialInstitutionName || 'BANK OF NOVA SCOTIA',
      bankBranchAddress: this.props.user.bankBranchAddress || '',
      accountNumber: this.props.user.accountNumber || '',
      transitNumber: this.props.user.transitNumber || '',
      creditCardNumber: this.props.user.creditCardNumber || '',
      nameOnCreditCard: this.props.user.nameOnCreditCard || '',
      creditCardExpiry: this.props.user.creditCardExpiry || '',
      cvc: this.props.user.cvc || '',
      showEFT: true,
      isaccountNumberInvalid: false,
      istransitNumberInvalid: false,
      iscreditCardNumberInvalid: false,
      iscvcInvalid: false,
      iscreditCardExpiryInvalid: false,
    };
  }
  componentDidMount() {
    if (this.props.user.paymentMethod === 'CREDIT CARD') {
      this.setState({ showEFT: false });
    } else if (this.props.user.paymentMethod === 'EFT (DIRECT DEBIT)') {
      this.setState({ showEFT: true });
    }
  }

  /**
   * Handles to go back on the screen when user press previous button
   * Callback prop method received from parent
   * Callback the reducer method to keep holding the data in state
   * @memberof AccountingSetup
   */
  goPrevious = () => {
    const data = { ...this.state };
    this.props.goPrevious();
    this.props.createUser(data);
  };
  /**
   * Handle form submission to go next screen when user press next button
   * Callback the reducer method to keep holding the data in global state
   * @memberof AccountingSetup
   */
  onSubmit = event => {
    event.preventDefault();
    if (
      !this.state.iscreditCardNumberInvalid &&
      !this.state.iscreditCardExpiryInvalid &&
      !this.state.iscvcInvalid &&
      !this.state.isaccountNumberInvalid &&
      !this.state.istransitNumberInvalid
    ) {
      const data = { ...this.state };
      this.props.goNext();
      this.props.createUser(data);
    }
  };

  /**
   * @param {field Name} name
   * This should be only used when dealng with react-text-mask library
   * Called by child component when input value changes on the form
   * @memberof AccountingSetup
   */
  handleChange = name => event => {
    const changedBit = {
      [name]: event.target.value,
    };

    if (name === 'creditCardExpiry') {
      let field = 'is' + name + 'Invalid';
      this.setStateAfterVerify(field, name, changedBit, 7);
    } else {
      this.setState(changedBit);
    }
  };

  /**
   * Method for handling changing the state when user changes payment method
   * @memberof AccountingSetup
   */
  selectPaymentMethod = event => {
    this.onChange(event);
    event.target.value === 'EFT (DIRECT DEBIT)'
      ? this.setState({ showEFT: true,...AccountSetupInitialState})
      : this.setState({ showEFT: false,...AccountSetupInitialState});  
  };

  /**
   * Updates local state as it recieves input data from input fields
   * @memberof AccountingSetup
   */
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    const name = event.target.name;
    if (name === 'creditCardNumber') {
      let field = 'is' + name + 'Invalid';
      this.setStateAfterVerify(field, name, changedBit, 16);
    } else if (name === 'cvc') {
      let field = 'is' + name + 'Invalid';
      this.setStateAfterVerify(field, name, changedBit, 3);
    } else if (name === 'accountNumber' || name === 'transitNumber') {
      let field = 'is' + name + 'Invalid';
      this.setStateAfterVerify(field, name, changedBit);
    } else {
      this.setState(changedBit);
    }
  };

  /**
   * @param {dynamically generated flag to reuse the method} field
   * @param {field name on the form} name
   * @param {changed object} changedBit
   * @param {minimum length of input expected by user} len
   * @memberof AccountingSetup
   */
  setStateAfterVerify(field, name, changedBit, len) {
    if (checkForValidInput(changedBit[name], name)) {
      let changedFlag = {
        [field]: true,
      };
      this.setState(changedFlag);
    } else if (checkForDataLength(changedBit[name], len, name)) {
      let changedFlag = {
        [field]: true,
      };
      this.setState(changedFlag);
      this.setState(changedBit);
    } else {
      let changedFlag = {
        [field]: false,
      };
      this.setState(changedFlag);
      this.setState(changedBit);
    }
  }

  render() {
    return (
      <form className="signup-form" onSubmit={this.onSubmit} autoComplete="off">
        <FormHeader headerText="Accounting Setup" />
        <div className="flex-wrap">
          <TextField
            required
            select
            label="PAYMENT METHOD"
            name="paymentMethod"
            className="text-field"
            id="paymentMethod"
            style={{ margin: '2%', flexBasis: 335 }}
            value={this.state.paymentMethod || 'EFT (DIRECT DEBIT)'}
            onChange={this.selectPaymentMethod}
          >
            {paymentMethods.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            select
            label="REQUESTED TERMS"
            name="requestedTerms"
            className="text-field"
            id="requestedTerms"
            style={{ margin: '2%', flexBasis: 335 }}
            value={this.state.requestedTerms || 'NET 14'}
            onChange={this.onChange}
          >
            {requestedTerms.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            label="ACCOUNTING EMAIL"
            type="email"
            className="text-field"
            id="accountingEmail"
            inputProps={{ maxLength: 50 }}
            value={this.state.accountingEmail || ''}
            name="accountingEmail"
            style={{ margin: '2%', flexBasis: 700 }}
            onChange={this.onChange}
          />
          {this.state.showEFT ? (
            <EFT
              financialInstitutionName={this.state.financialInstitutionName}
              accountNumber={this.state.accountNumber}
              transitNumber={this.state.transitNumber}
              bankBranchAddress={this.state.bankBranchAddress}
              onChange={this.onChange}
              isaccountNumberInvalid={this.state.isaccountNumberInvalid}
              istransitNumberInvalid={this.state.istransitNumberInvalid}
              handleChange={this.handleChange}
            />
          ) : (
            <CreditCardForm
              onChange={this.onChange}
              creditCardNumber={this.state.creditCardNumber}
              nameOnCreditCard={this.state.nameOnCreditCard}
              creditCardExpiry={this.state.creditCardExpiry}
              cvc={this.state.cvc}
              iscreditCardNumberInvalid={this.state.iscreditCardNumberInvalid}
              iscvcInvalid={this.state.iscvcInvalid}
              iscreditCardExpiryInvalid={this.state.iscreditCardExpiryInvalid}
              handleChange={this.handleChange}
            />
          )}
          <ButtonsGroup goPrevious={this.goPrevious} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.signupState,
  users: state.usersState,
});
const mapDispatchToProps = { createUser, saveUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountingSetup);
