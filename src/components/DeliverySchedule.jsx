import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './styles/DeliverySchedule.scss';
const deliveriesFrom = ['9:00AM','10:00AM','11:00AM','12:00PM'];
const deliveriesTo= ['1:00PM','2:00PM','3:00PM','4:00PM'];

class DeliverySchedule extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      deliveriesFrom: '11:00AM',
      deliveriesTo: '3:00PM',
      specialInstructions:'',
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
   * @memberof DeliverySchedule
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
   * @memberof DeliverySchedule
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
      <form  className="registration-form" onSubmit={this.onSubmit} autoComplete="off">
        
        <div className="form-header">
          <h1>Delivery Schedule</h1>
        </div>
        <div className="flex-wrap">
          
          <TextField
            required
            select
            label="DELIVERIES FROM"
            name="deliveriesFrom"
            className="text-field"
            id="deliveriesFrom"
            style={{margin:'2%',flexBasis:300}}
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
            style={{margin:'2%',flexBasis:300}}
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
            className="text-field"
            id="specialInstructions"
            placeholder="COMPANY ADDRESS"
            value={this.state.specialInstructions}
           
            name="specialInstructions"
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

// DeliverySchedule.propTypes = {
//   onComplete: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };

export default DeliverySchedule;
