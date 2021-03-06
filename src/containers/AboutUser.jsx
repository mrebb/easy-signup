import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { roles, restaurantTypes } from '../data/Constants';
import ButtonsGroup from '../components/ButtonsGroup';
import FormHeader from '../components/FormHeader';
import PhoneNumberField from '../components/PhoneNumber';

class AboutUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name || '',
      role: this.props.user.role || 'Head Chef',
      restaurantName: this.props.user.restaurantName || '',
      restaurantType:
        this.props.user.restaurantType || 'Regional(3-5 Locations)',
      phoneNumber: this.props.user.phoneNumber || '',
      companyAddress: this.props.user.companyAddress || '',
      isNumberInvalid:false,
    };
  }

  /**
   /**
   * Handles to go back on the screen when user press previous button
   * Callback prop method received from parent
   * Callback the reducer method to keep holding the data in state
   * @memberof AboutUser
   */
  goPrevious = () => {
    const data = { ...this.state };
    this.props.goPrevious();
    this.props.createUser(data);
  };
  /**
   * Handle form submission to go next screen when user press next button
   * Callback the reducer method to keep holding the data in global state
   * @memberof AboutUser
   */
  onSubmit = event => {
    event.preventDefault();
    const data = { ...this.state };
    const phoneNumberLength = data.phoneNumber.toString().replace(/\s/g, '').length;
    if(phoneNumberLength<13){
      this.setState({isNumberInvalid:true});
    }
    else{ 
      this.props.goNext();
      this.props.createUser(data);
    }
  };

  /**
   * This should be only used when dealng with react-text-mask library
   * Called by child component when input value changes on the form
   * @memberof AboutUser
   */
  handleChange = name => event => {
    const changedBit = {
      [name]: event.target.value,
    };
    this.setState(changedBit);
    const phoneNumberLength = changedBit.phoneNumber.toString().replace(/\s/g, '').length;
    if(phoneNumberLength===13){
      this.setState({isNumberInvalid:false});
    }
  };  
  /**
   * Updates local state as it recieves input data from input fields
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
      <form className="signup-form" onSubmit={this.onSubmit} autoComplete="off">
        <FormHeader headerText="About You" />
        <div className="flex-wrap">
          <TextField
            required
            label="YOUR NAME"
            type="text"
            className="text-field"
            id="name"
            inputProps={{maxLength:50}}
            placeholder="YOUR NAME"
            value={this.state.name || ''}
            style={{ margin: '2%', flexBasis: 335 }}
            name="name"
            onChange={this.onChange}
          />
          <TextField
            required
            select
            label="YOUR ROLE"
            name="role"
            className="text-field"
            id="role"
            style={{ margin: '2%', flexBasis: 335 }}
            value={this.state.role || 'Head Chef'}
            onChange={this.onChange}
          >
            {roles.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            label="RESTAURANT NAME"
            type="text"
            inputProps={{maxLength:50}}
            className="text-field"
            id="restaurantName"
            placeholder="RESTAURANT NAME"
            value={this.state.restaurantName || ''}
            name="restaurantName"
            style={{ margin: '2%', flexBasis: 335 }}
            onChange={this.onChange}
          />
          <TextField
            required
            select
            label="RESTAURANT TYPE"
            name="restaurantType"
            className="text-field"
            id="restaurantType"
            style={{ margin: '2%', flexBasis: 335 }}
            value={this.state.restaurantType || 'Regional(3-5 Locations)'}
            onChange={this.onChange}
          >
            {restaurantTypes.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <PhoneNumberField
            phoneNumber={this.state.phoneNumber}
            onChange={this.handleChange}
            isNumberInvalid={this.state.isNumberInvalid}
          />
          <TextField
            required
            label="COMPANY ADDRESS"
            type="text"
            className="text-field"
            inputProps={{maxLength:150}}
            id="companyAddress"
            placeholder="COMPANY ADDRESS"
            value={this.state.companyAddress || ''}
            name="companyAddress"
            style={{ margin: '2%', flexBasis: 700 }}
            onChange={this.onChange}
          />
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
)(AboutUser);
