import React, { Component } from "react";
// import { Redirect, BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Registration from "./Registration";
import AboutUser from "./AboutUser";
import DeliverySchedule from "./DeliverySchedule";
import AccountingSetup from "./AccountingSetup";
import AllDone from "./AllDone";
import FinalScreen from "./FinalScreen";
import "./styles/SignUp.scss";
import userKeys from "../data/UserSignUpFields";
const uuid = require("uuid/v1");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      user: null,
      showEFT: "default"
    };
  }
  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };
  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };
  saveUser = data => {
    const user = { ...this.state.user };
    Object.keys(userKeys).forEach(key => {
      if (data[key]) {
        user[key] = data[key];
      }
    });
    this.setState({ user });
  };
  savePaymentMethod = flag => {
    this.setState({ showEFT: flag });
  };
  storeUser = data => {
    const newUser = data;
    newUser.id = uuid();
    const users = JSON.parse(window.localStorage.getItem("users")) || [];
    users.push(newUser)
    window.localStorage.setItem("users", JSON.stringify(users));
  }

  render() {
    switch (this.state.step) {
      case 1: {
        console.log("yay", this.state.user);
        return (
          <Registration
            user={this.state.user}
            goNext={this.nextStep}
            onSubmit={this.saveUser}
          />
        );
      }

      case 2: {
        console.log("yay", this.state.user);
        return (
          <AboutUser
            user={this.state.user}
            goNext={this.nextStep}
            goPrevious={this.previousStep}
            onSubmit={this.saveUser}
          />
        );
      }

      case 3: {
        console.log("yay", this.state.user);
        return (
          <DeliverySchedule
            user={this.state.user}
            goNext={this.nextStep}
            goPrevious={this.previousStep}
            onSubmit={this.saveUser}
          />
        );
      }

      case 4: {
        console.log("yay", this.state.user, this.state.showEFT);
        return (
          <AccountingSetup
            user={this.state.user}
            updatePaymentMethod={this.savePaymentMethod}
            paymentMethod={this.state.showEFT}
            goNext={this.nextStep}
            goPrevious={this.previousStep}
            onSubmit={this.saveUser}
          />
        );
      }
      case 5: {
        console.log("yay", this.state.user, this.state.showEFT);
        return (
          <AllDone
            user={this.state.user}
            goNext={this.nextStep}
            goPrevious={this.previousStep}
            onSubmit={this.saveUser}
          />
        );
      }
      case 6: {
        this.storeUser(this.state.user);
        console.log("yay", this.state.user);
        return <FinalScreen />;
      }

      default:
        return;
    }
  }
}
// const mapStateToProps = state => ({
//   auth: state.authState,
//   articles: state.articleState,
// });
// const mapDispatchToProps = { addArticle,logout };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Dashboard);
