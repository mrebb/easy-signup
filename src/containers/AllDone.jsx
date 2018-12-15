import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';
import ButtonsGroup from '../components/ButtonsGroup';
import FormHeader from '../components/FormHeader';

class AllDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailProspect1: this.props.user.emailProspect1 || '',
      emailProspect2: this.props.user.emailProspect2 || '',
      emailProspect3: this.props.user.emailProspect3 || '',
    };
  }

  goPrevious = () => {
    const data = { ...this.state };
    this.props.goPrevious();
    this.props.createUser(data);
  };
  /**
   * Handle form submission
   * Calls reducer method
   * @memberof AllDone
   */
  onSubmit = event => {
    event.preventDefault();
    const data = { ...this.state };
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
      <form className="signup-form" onSubmit={this.onSubmit} autoComplete="off">
        <FormHeader headerText="All done!" />
        <div className="all-done-message">
          <h2>
            Thanks for signing up!
            <br /> Invite other members of your team to join:
          </h2>
        </div>
        <div className="flex-wrap">
          <TextInput
            label="EMAIL #1 (Optional)"
            name="emailProspect1"
            value={this.state.emailProspect1 || ''}
            onChange={this.onChange}
          />
          <TextInput
            label="EMAIL #2 (Optional)"
            name="emailProspect2"
            value={this.state.emailProspect2 || ''}
            onChange={this.onChange}
          />
          <TextInput
            label="EMAIL #3 (Optional)"
            name="emailProspect3"
            value={this.state.emailProspect3 || ''}
            onChange={this.onChange}
          />
          <ButtonsGroup buttonText="SUBMIT" goPrevious={this.goPrevious} />
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
)(AllDone);
