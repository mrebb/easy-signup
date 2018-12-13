import React, { Fragment, Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { Registration } from '../store/actions/auth-action';

import './styles/Registration.scss';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      email: '',
      password: '',
      confirmPassword:'',
    };
    this.state = { ...this.initialState };
  }
  
  /**
   * Updates state as it recieves input data Registration form
   *
   * @memberof Registration
   */
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  /**
   * Handle form submission
   * Calls reducer method 
   * @memberof Registration
   */
  onSubmit = event => {
    event.preventDefault();
    const data = {...this.state};
    console.log('data',data);
    this.props.goNext();
    this.props.onSubmit(data);
  };

  /**
   * @param {username} currentUser
   * @return boolean
   * @memberof Registration
   */
  // validateUser = currentUser => {
  //   return configuredUsers.filter(user => user.username === currentUser.toLowerCase())
  //     .length > 0
  //     ? true
  //     : false;
  // };

  render() {
    return (
      <Fragment>
       
        {/* <div className="input-form"> */}
        <form
          className="registration-form"
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <div className="form-header">
            <h1>Registration</h1>
          </div>
          <div className="flex-wrap">
            <TextField
              required
              type="email"
              label="EMAIL"
              className="text-field"
              // error= {this.state.email===''}
              helperText="Required Field"
              id="email"
              placeholder="johndoe@example.com"
              value={this.state.email}
              // fullWidth={true}
              style={{margin:'2%',flexBasis:900}}
              name="email"
              onChange={this.onChange}
            />
            <br />
            <TextField
              required
              type="password"
              label="PASSWORD"
              placeholder=""
              className="text-field"
              // error= {this.state.email===''}
              helperText="Required Field"
              id="password"
              value={this.state.password}
              style={{margin:'2%',flexBasis:900}}
              margin="normal"
              name="password"
              onChange={this.onChange}
            />
            <br />
            <TextField
              required
              type="password"
              label="CONFIRM PASSWORD"
              placeholder=""
              // error= {this.state.email===''}
              helperText="Required Field"
              className="text-field"
              value={this.state.confirmPassword}
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              style={{margin:'2%',flexBasis:900}}
              onChange={this.onChange}
            />
            <br/>
            <Button
              label="Submit"
              id="next"
              type="submit"
              variant="contained"
              color="primary"
            >
            Next
            </Button>
          </div>
        </form>
        {/* </div> */}
        {/* {this.state.isGoNext && <Redirect to="/dashboard" />} */}
      </Fragment>
    );
  }
}
// const mapStateToProps = ({ authState }) => ({ auth: authState });
// const mapDispatchToProps = { Registration };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Registration);
