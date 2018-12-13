import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './styles/AboutUser.scss';
const roles = ['Head Chef','Sous Chef', 'Purchasing', 'Owner'];
const restaurantTypes= ['One Location','Regional(3-5 Locations)','National Chain','Grocery'];
class AboutUser extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      role: 'Head Chef',
      restaurantName: '',
      restaurantType: 'Regional(3-5 Locations)',
      phoneNumber:'',
      companyAddress:'',
    };

    const initialState = this.defaultState;

    this.state = { ...initialState };
  }
  
  goPrevious = () =>{
    this.props.goPrevious();
  }
  /**
   * Handle form submission
   * Calls reducer method 
   * @memberof AboutUser
   */
  onSubmit = event => {
    event.preventDefault();
    const data = {...this.state};
    console.log('data',data);
    this.props.goNext();
    this.props.onSubmit(data);
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
      <form  className="registration-form" onSubmit={this.onSubmit} autoComplete="off">
        
        <div className="form-header">
          <h1>About You</h1>
        </div>
        <div className="flex-wrap">
          <TextField
            required
            label="YOUR NAME"
            type="text"
            className="text-field"
            id="name"
            placeholder="YOUR NAME"
            value={this.state.name}
            style={{margin:'2%',flexBasis:300}}
            name="name"
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            select
            label="YOUR ROLE"
            name="role"
            className="text-field"
            id="role"
            style={{margin:'2%',flexBasis:300}}
            value={this.state.role}
            onChange={this.onChange}
          >
            {roles.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br/>
          <TextField
            required
            label="RESTAURANT NAME"
            type="text"
            className="text-field"
            id="restaurantName"
            placeholder="RESTAURANT NAME"
            value={this.state.restaurantName}
        
            name="restaurantName"
            style={{margin:'2%',flexBasis:300}}
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            select
            label="RESTAURANT TYPE"
            name="restaurantType"
            className="text-field"
            id="restaurantType"
            style={{margin:'2%',flexBasis:300}}
            value={this.state.restaurantType}
            onChange={this.onChange}
          >
            {restaurantTypes.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br/>
          <TextField
            required
            label="PHONE NUMBER"
            type="number"
            className="text-field"
            id="phoneNumber"
            placeholder="()-XXX-XXXX"
            value={this.state.phoneNumber}
          
            name="phoneNumber"
            style={{margin:'2%',flexBasis:900}}
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            label="COMPANY ADDRESS"
            type="text"
            className="text-field"
            id="companyAddress"
            placeholder="COMPANY ADDRESS"
            value={this.state.companyAddress}
           
            name="companyAddress"
            style={{margin:'2%',flexBasis:900}}
            onChange={this.onChange}
          />
          <br/>
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

export default AboutUser;
