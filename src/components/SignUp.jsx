import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/signup-action';
import { saveUser } from '../store/actions/users-action';
import Registration from './Registration';
import AboutUser from './AboutUser';
import DeliverySchedule from './DeliverySchedule';
import AccountingSetup from './AccountingSetup';
import AllDone from './AllDone';
import FinalScreen from './FinalScreen';
import './styles/SignUp.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      showEFT: 'default',
    };
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };
  
  savePaymentMethod = flag => {
    this.setState({ showEFT: flag });
  };
  
  render() {

    switch (this.state.step) {

    case 1: {
      return (
        <Registration
          goNext={this.nextStep}
        />
      );
    }
    case 2: {
      return (
        <AboutUser
          goNext={this.nextStep}
          goPrevious={this.previousStep}
        />
      );
    }
    case 3: {
      return (
        <DeliverySchedule
          goNext={this.nextStep}
          goPrevious={this.previousStep}
        />
      );
    }
    case 4: {
      return (
        <AccountingSetup
          updatePaymentMethod={this.savePaymentMethod}
          paymentMethod={this.state.showEFT}
          goNext={this.nextStep}
          goPrevious={this.previousStep}
        />
      );
    }
    case 5: {
      return (
        <AllDone
          goNext={this.nextStep}
          goPrevious={this.previousStep}
        />
      );
    }
    case 6: {
      return <FinalScreen />;
    }

    default:
      return;
    }
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
)(Signup);
