import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';
import FormHeader from '../components/FormHeader';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      email: '',
      password: '',
      confirmPassword:'',
      error:false,
      isUserDuplicate:false,
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
    if(this.state.isUserDuplicate && event.target.name==='email'){
      this.setState({isUserDuplicate:false});
    }
    
  };

  /**
   * Handle form submission
   * Calls reducer method 
   * @memberof Registration
   */
  onSubmit = event => {
    event.preventDefault();
    let email = this.state.email;
    if(this.isDuplicateEmailFound(email)){
      this.setState({isUserDuplicate:true});
    }
    else if(this.state.password===this.state.confirmPassword){
      const data = {...this.state};
      this.props.goNext();
      this.props.createUser(data);
    }
    else{
      this.setState({error:true});
    }
  };

  /**
   * @param {email}
   * @return boolean
   * @memberof Registration
   */
  isDuplicateEmailFound = (email) => {
    return this.props.users.filter(user => user.email.toLowerCase() === email.toLowerCase())
      .length > 0
      ? true
      : false;
  };

  render() {
    return (
      <Fragment>
        <form
          className="signup-form"
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <FormHeader headerText="Registration"/>
          <div className="flex-wrap">
            <TextField
              required
              type="email"
              label="EMAIL"
              className="text-field"
              inputProps={{maxLength:50}}
              error= {this.state.isUserDuplicate===true}
              helperText={this.state.isUserDuplicate?'Email address already registered':''}
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
              inputProps={{maxLength:50}}
              placeholder=""
              className="text-field"
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
              inputProps={{maxLength:50}}
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
      </Fragment>
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
)(Registration);
