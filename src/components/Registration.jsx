import React, { Fragment, Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { login } from '../store/actions/auth-action';
import configuredUsers from '../data/users';
import './styles/Registration.scss';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      email: '',
      password: '',
      confirmPassword:'',
      isGoNext: false,
    };
    this.state = { ...this.initialState };
  }
  
  /**
   * Updates state as it recieves input data login form
   *
   * @memberof Login
   */
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  /**
   * Handle authentication of user
   * Calls reducer method 'login'
   * @memberof Login
   */
  onSubmit = event => {
    event.preventDefault();
    if (this.validateUser(this.state.username)) {
      this.props.login(this.state.username);
      this.setState({ redirect: true });
    } else {
      alert('invalid user');
      this.setState({ ...this.initialState });
    }
  };

  /**
   * @param {username} currentUser
   * @return boolean
   * @memberof Login
   */
  validateUser = currentUser => {
    return configuredUsers.filter(user => user.username === currentUser.toLowerCase())
      .length > 0
      ? true
      : false;
  };

  render() {
    return (
      <Fragment>
        <h1>Registration</h1>
        <form
          className="registration-form"
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <TextField
            required
            label="EMAIL"
            placeholder="johndoe@example.com"
            value={this.state.username}
            margin="normal"
            name="email"
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            label="PASSWORD"
            placeholder=""
            value={this.state.password}
            margin="normal"
            name="password"
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            label="CONFIRMPASSWORD"
            placeholder=""
            value={this.state.confirmPassword}
            margin="normal"
            name="confirmPassword"
            onChange={this.onChange}
          />
          <br/>
          <Button
            label="Submit"
            style={{
              margin: 15,
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
        {/* {this.state.isGoNext && <Redirect to="/dashboard" />} */}
      </Fragment>
    );
  }
}
// const mapStateToProps = ({ authState }) => ({ auth: authState });
// const mapDispatchToProps = { login };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Registration);
