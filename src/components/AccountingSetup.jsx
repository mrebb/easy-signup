import React, {Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
const paymentMethods = ['EFT (DIRECT DEBIT)', 'CREDIT CARD'];
const requestedTerms = ['CHARGE ON DELIVERY', 'NET 7', 'NET 14'];
const financialInstitutionNames = ['BANK OF NOVA SCOTIA', 'CHASE'];

class AccountingSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: this.props.user.paymentMethod || 'EFT (DIRECT DEBIT)',
      requestedTerms: this.props.user.requestedTerms || 'NET 14',
      accountingEmail: this.props.user.accountingEmail || '',
      financialInstitutionName:this.props.user.financialInstitutionName || 'BANK OF NOVA SCOTIA',
      bankBranchAddress: this.props.user.bankBranchAddress || '',
      accountNumber: this.props.user.accountNumber || '',
      transitNumber: this.props.user.transitNumber || '',
      creditCardNumber: this.props.user.creditCardNumber || '',
      nameOnCreditCard: this.props.user.nameOnCreditCard || '',
      creditCardExpiry: this.props.user.creditCardExpiry || '',
      cvc: this.props.user.cvc || '',
      showEFT:this.props.paymentMethod,
    };
  }
  componentDidMount() {
    if(this.props.paymentMethod==='default'){
      this.setState({showEFT:true});
    }
    else{
      this.setState({showEFT:this.props.paymentMethod});
    }
  }
  

  goPrevious = () => {
    const data = { ...this.state };
    // console.log('data with previous click', data);
    this.props.goPrevious();
    this.props.onSubmit(data);
  };
  /**
   * Handle form submission
   * Calls reducer method
   * @memberof AboutUser
   */
  onSubmit = event => {
    event.preventDefault();
    const data = { ...this.state };
    // console.log('data', data);
    this.props.goNext();
    this.props.onSubmit(data);
    this.props.updatePaymentMethod(this.state.showEFT);

  };
  /**
   * Random alpha numeric unique string generator
   * Used as userID
   * @memberof AboutUser
   */
  id = () => {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
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
      // <div className = "about-user-form-container">
      <form
        className="registration-form"
        onSubmit={this.onSubmit}
        autoComplete="off"
      >
        <div className="form-header">
          <h1>Accounting Setup</h1>
        </div>
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
            maxLength="50"
            value={this.state.accountingEmail || ''}
            name="accountingEmail"
            style={{ margin: '2%', flexBasis: 650 }}
            onChange={this.onChange}
          />
          <br />
          {this.state.showEFT ?
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
                maxLength="50"
                style={{ margin: '2%', flexBasis: 650 }}
                value={this.state.financialInstitutionName || 'BANK OF NOVA SCOTIA'}
                onChange={this.onChange}
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
                value={this.state.bankBranchAddress || ''}
                maxLength="250"
                name="bankBranchAddress"
                style={{ margin: '2%', flexBasis: 650 }}
                onChange={this.onChange}
              />
              <br />
              <TextField
                required
                label="ACCOUNT NUMBER"
                type="number"
                className="text-field"
                id="accountNumber"
                value={this.state.accountNumber || ''}
                name="accountNumber"
                style={{ margin: '2%', flexBasis: 310 }}
                onChange={this.onChange}
              />
              <br />
              <TextField
                required
                label="TRANSIT NUMBER"
                type="number"
                className="text-field"
                id="transitNumber"
                // maxLength="50"
                value={this.state.transitNumber || ''}
                name="transitNumber"
                style={{ margin: '2%', flexBasis: 310 }}
                onChange={this.onChange}
              />
            </Fragment> :
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
                value={this.state.creditCardNumber || ''}
                name="creditCardNumber"
                style={{ margin: '2%', flexBasis: 650 }}
                onChange={this.onChange}
              />
              <br />
              <TextField
                required
                label="NAME ON CREDIT CARD"
                type="text"
                className="text-field"
                id="nameOnCreditCard"
                maxLength="50"
                value={this.state.nameOnCreditCard || ''}
                name="nameOnCreditCard"
                style={{ margin: '2%', flexBasis: 650 }}
                onChange={this.onChange}
              />
              <br />
              <TextField
                required
                label="EXPIRY (MM/YYYY)"
                type="text"
                className="text-field"
                id="creditCardExpiry"
                maxLength="7"
                value={this.state.creditCardExpiry || ''}
                name="creditCardExpiry"
                style={{ margin: '2%', flexBasis: 310 }}
                onChange={this.onChange}
              />
              <br />
              <TextField
                required
                label="CVC"
                type="number"
                className="text-field"
                id="cvc"
                value={this.state.cvc || ''}
                name="cvc"
                style={{ margin: '2%', flexBasis: 310 }}
                onChange={this.onChange}
              />
            </Fragment>
          }
          <br />
          <div className="BtnGroup">
            <Button
              label="PREVIOUS"
              onClick={this.goPrevious}
              id="previous"
              type="button"
              variant="contained"
              color="primary"
            >
              PREVIOUS
            </Button>
            <Button
              label="NEXT"
              id="next-with-previous"
              type="submit"
              variant="contained"
              color="primary"
            >
              NEXT
            </Button>
          </div>
        </div>
      </form>
      // {/* {this.state.isGoNext && <p style={{color:'green'}}>Successfully posted!!</p>} */}
      // </div>
    );
  }
}

// AboutUser.propTypes = {
//   onComplete: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };

export default AccountingSetup;
