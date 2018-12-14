import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';

import './styles/AllDone.scss';

class AllDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: this.props.user.email1 || '',
      email2: this.props.user.email2 ||  '',
      email3: this.props.user.email3 || '',
    };
  }
  
  goPrevious = () =>{
    const data = {...this.state};
    this.props.goPrevious();
    this.props.createUser(data);
  }
  /**
   * Handle form submission
   * Calls reducer method 
   * @memberof AllDone
   */
  onSubmit = event => {
    event.preventDefault();
    const data = {...this.state};
    this.props.goNext();
    this.props.createUser(data);
    this.props.saveUser(this.props.user);
  };

  /**
   * Updates state as it recieves input data from text input
   * 
   * @memberof AllDone
   */
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form  className="registration-form" onSubmit={this.onSubmit} autoComplete="off">
        <div className="form-header">
          <h1>All done!</h1>
        </div>
        <div className="all-done-message">
          <h2>Thanks for signing up!<br/> Invite other members of your team to join:</h2>
        </div>
        <div className="flex-wrap">
          
          <TextField
            type="email"
            label="EMAIL #1 (Optional)"
            className="text-field"
            maxLength="50"
            id="email"
            value={this.state.email1 || ''}
            style={{margin:'2%',flexBasis:650}}
            name="email1"
            onChange={this.onChange}
          />
          <br />
          <TextField
            type="email"
            label="EMAIL #2 (Optional)"
            className="text-field"
            maxLength="50"
            id="email2"
            value={this.state.email2 || ''}
            style={{margin:'2%',flexBasis:650}}
            name="email2"
            onChange={this.onChange}
          />
          <br/>
          <TextField
            type="email"
            label="EMAIL #3 (Optional)"
            className="text-field"
            maxLength="50"
            id="email3"
            value={this.state.email3 || ''}
            style={{margin:'2%',flexBasis:650}}
            name="email3"
            onChange={this.onChange}
          />
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
            SUBMIT
            </Button>
          </div>
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
)(AllDone);