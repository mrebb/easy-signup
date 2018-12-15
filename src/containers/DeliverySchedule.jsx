import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { deliveriesFrom,deliveriesTo } from '../data/Constants';
import ButtonsGroup from '../components/ButtonsGroup';
import FormHeader from '../components/FormHeader';

class DeliverySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveriesFrom: this.props.user.deliveriesFrom || '11:00AM',
      deliveriesTo: this.props.user.deliveriesTo ||'3:00PM',
      specialInstructions: this.props.user.specialInstructions ||'',
    };
  }
  
  /**
   * Handles to go back on the screen when user press previous button
   * Callback prop method received from parent
   * Callback the reducer method to keep holding the data in state
   * @memberof DeliverySchedule
   */
  goPrevious = () =>{
    const data = {...this.state};
    this.props.goPrevious();
    this.props.createUser(data);
  }
  /**
   * Handle form submission to go next screen when user press next button
   * Callback the reducer method to keep holding the data in global state
   * @memberof DeliverySchedule
   */
  onSubmit = event => {
    event.preventDefault();
    const data = {...this.state};
    this.props.goNext();
    this.props.createUser(data);
  };
  
  /**
   * Updates state as it recieves input data from text input
   * 
   * @memberof DeliverySchedule
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
      <form  className="signup-form" onSubmit={this.onSubmit} autoComplete="off">
        <FormHeader headerText="Delivery Schedule"/>
        <div className="flex-wrap">
          <TextField
            required
            select
            label="DELIVERIES FROM"
            name="deliveriesFrom"
            className="text-field"
            id="deliveriesFrom"
            style={{margin:'2%',flexBasis:310}}
            value={this.state.deliveriesFrom}
            onChange={this.onChange}
          >
            {deliveriesFrom.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br/>
          
          <TextField
            required
            select
            label="DELIVERIES TO"
            name="deliveriesTo"
            className="text-field"
            id="deliveriesTo"
            style={{margin:'2%',flexBasis:310}}
            value={this.state.deliveriesTo}
            onChange={this.onChange}
          >
            {deliveriesTo.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br/>
          <TextField
            required
            label="SPECIAL INSTRUCTIONS"
            type="text"
            inputProps={{maxLength:250}}
            className="text-field"
            id="specialInstructions"
            placeholder="Leave at Front Door.."
            value={this.state.specialInstructions}
           
            name="specialInstructions"
            style={{margin:'2%',flexBasis:650}}
            onChange={this.onChange}
          />
          <br/>
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
const mapDispatchToProps = {createUser,saveUser};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliverySchedule);