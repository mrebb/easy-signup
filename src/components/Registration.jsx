import React, { Fragment, Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { Registration } from '../store/actions/auth-action';
import './styles/Registration.scss';
const users = JSON.parse(window.localStorage.getItem('users')) || [];
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      email: '',
      password: '',
      confirmPassword:'',
      error:false,
    };
    this.initialState = this.props.user || this.defaultState;
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
    
    //This block is only executed when user submits the form without password match criteria
    //This turns off the red color around confirm password field
    if(this.state.error){
      if(event.target.name==='confirmPassword'){
        const error = this.state.password===changedBit.confirmPassword?false:true;
        this.setState({error});
      }
      else if(event.target.name==='password'){
        const error = this.state.confirmPassword===changedBit.password?false:true;
        this.setState({error});
      }
    }
    
  };

  /**
   * Handle form submission
   * Calls reducer method 
   * @memberof Registration
   */
  onSubmit = event => {
    event.preventDefault();
    if(this.state.password===this.state.confirmPassword){
      let email = this.state.email;
      if(!this.isDuplicateEmailFound(email)){
        const data = {...this.state};
        console.log('data',data);
        this.props.goNext();
        this.props.onSubmit(data);
      }
      else{
        alert('email already taken');
      }
    }
    else{
      this.setState({error:true});
    }
  };

  /**
   * @param {username} currentUser
   * @return boolean
   * @memberof Registration
   */
  isDuplicateEmailFound = (email) => {
    return users.filter(user => user.email.toLowerCase() === email.toLowerCase())
      .length > 0
      ? true
      : false;
  };

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
              maxLength="50"
              helperText="Required Field"
              id="email"
              placeholder="johndoe@example.com"
              value={this.state.email || ''}
              // fullWidth={true}
              style={{margin:'2%',flexBasis:650}}
              name="email"
              onChange={this.onChange}
            />
            <br />
            <TextField
              required
              type="password"
              label="PASSWORD"
              maxLength="50"
              placeholder=""
              className="text-field"
              // error= {this.state.email===''}
              helperText="Required Field"
              id="password"
              value={this.state.password || ''}
              style={{margin:'2%',flexBasis:650}}
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
              error= {this.state.error}
              helperText={this.state.password!==this.state.confirmPassword?'passwords do not match':''}
              className="text-field"
              value={this.state.confirmPassword || ''}
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              style={{margin:'2%',flexBasis:650}}
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