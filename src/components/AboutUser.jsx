import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles/AboutUser.scss';

class AboutUser extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      role: ['Head Chef','Sous Chef', 'Purchasing', 'Owner'],
      restaurantName: '',
      restaurantType: ['One Location','Regional(3-5 Locations)','National Chain','Grocery'],
      phoneNumber:'',
      companyAddress:'',
      isGoNext:false,
    };

    const initialState = this.defaultState;

    this.state = { ...initialState };
  }

  /**
   * Random alpha numeric unique string generator
   * Used as article id
   * @memberof ArticleForm
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
   * calls props method with article form data
   * passes article data to props method recieved from parent
   * @memberof ArticleForm
   */
  onSubmit = event => {
    event.preventDefault();
    this.setState({ isGoNext:true });
  };

  /**
   * Updates state as it recieves input data from text input
   * 
   * @memberof Article
   */
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <div className = "about-user-form-container">
        <form onSubmit={this.onSubmit} autoComplete="off">
          <TextField
            required
            label="YOUR NAME"
            placeholder="YOUR NAME"
            value={this.state.title}
            margin="normal"
            name="name"
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            label="RESTAURANT NAME"
            placeholder="RESTAURANT NAME"
            value={this.state.restaurantName}
            margin="normal"
            name="restaurantName"
            onChange={this.onChange}
          />
          <br />
          <TextField
            label="PHONE NUMBER"
            placeholder="()-XXX-XXXX"
            value={this.state.phoneNumber}
            margin="normal"
            name="thumbnail"
            onChange={this.onChange}
          />
          <br />
          <TextField
            label="COMPANY ADDRESS"
            placeholder="COMPANY ADDRESS"
            value={this.state.companyAddress}
            margin="normal"
            name="companyAddress"
            onChange={this.onChange}
          />
          <br/>
          <Button
            label="NEXT"
            style={{
              margin: 15,
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            NEXT
          </Button>
        </form>
        {/* {this.state.isGoNext && <p style={{color:'green'}}>Successfully posted!!</p>} */}
      </div>
    );
  }
}

// AboutUser.propTypes = {
//   onComplete: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };

export default AboutUser;
