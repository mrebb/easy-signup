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
    };
  }
  componentDidMount() {
    if (this.props.user.paymentMethod === 'CREDIT CARD') {
      this.setState({ showEFT: false });
    } else if (this.props.user.paymentMethod === 'EFT (DIRECT DEBIT)') {
      this.setState({ showEFT: true });
    }
  }

  goPrevious = () => {
    const data = { ...this.state };
    this.props.goPrevious();
    this.props.createUser(data);
  };
  /**
   * Handle form submission
   * Calls reducer method
   * @memberof AboutUser
   */
  onSubmit = event => {
    event.preventDefault();
    const data = { ...this.state };
    this.props.goNext();
    this.props.createUser(data);
  };

  handleChange = name => event => {
    const changedBit = {
      [name]: event.target.value,
    };
    this.setState(changedBit);
  };

  selectPaymentMethod = event => {
    this.onChange(event);
    event.target.value === 'EFT (DIRECT DEBIT)'
      ? this.setState({ showEFT: true })
      : this.setState({ showEFT: false });
  };
  /**
   * Updates state as it recieves input data from text input
   *
   * @memberof AboutUser
   */
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form
        className="signup-form"
        onSubmit={this.onSubmit}
        autoComplete="off"
      >
        <FormHeader headerText="Accounting Setup"/>
        <div className="flex-wrap">
          <TextField
            required
            select
            label="PAYMENT METHOD"
            name="paymentMethod"
            className="text-field"
            id="paymentMethod"
            style={{ margin: '2%', flexBasis: 310 }}
            value={this.state.paymentMethod || 'EFT (DIRECT DEBIT)'}
            onChange={this.selectPaymentMethod}
          >
            {paymentMethods.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            required
            select
            label="REQUESTED TERMS"
            name="requestedTerms"
            className="text-field"
            id="requestedTerms"
            style={{ margin: '2%', flexBasis: 310 }}
            value={this.state.requestedTerms || 'NET 14'}
            onChange={this.onChange}
          >
            {requestedTerms.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            required
            label="ACCOUNTING EMAIL"
            type="email"
            className="text-field"
            id="accountingEmail"
            inputProps={{maxLength:50}}
            value={this.state.accountingEmail || ''}
            name="accountingEmail"
            style={{ margin: '2%', flexBasis: 650 }}
            onChange={this.onChange}
          />
          <br />
          {this.state.showEFT ? (
            <EFT
              financialInstitutionName={this.state.financialInstitutionName}
              accountNumber={this.state.accountNumber}
              transitNumber={this.state.transitNumber}
              bankBranchAddress={this.state.bankBranchAddress}
              onChange={this.onChange}
              handleChange={this.handleChange}
            />
          ) : (
            <CreditCardForm
              onChange={this.onChange}
              creditCardNumber={this.state.creditCardNumber}
              nameOnCreditCard={this.state.nameOnCreditCard}
              creditCardExpiry={this.state.creditCardExpiry}
              cvc={this.state.cvc}
            />
          )}
          <br />
          <ButtonsGroup goPrevious={this.goPrevious}/>
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
