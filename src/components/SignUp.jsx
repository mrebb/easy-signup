import React, { Component } from 'react';
// import { Redirect, BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Registration from './Registration';
import AboutUser from './AboutUser';
import './styles/SignUp.scss';
import userKeys from '../data/UserSignUpFields';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state ={
      step: 1,
      user:{},
    };
  }
  nextStep = () => {
    this.setState({step:this.state.step+1});
  }
  previousStep = () => {
    this.setState({step:this.state.step-1});
  }
  saveUser = (data) => {
    const user = {...this.state.user};
    Object.keys(userKeys).forEach((key)=>{
      if(data[key]){
        user[key] = data[key];
      }
    });
    console.log('main',user);
    this.setState({user});
  }
  
  render(){
    switch(this.state.step) {
    case 1: {
      return <Registration goNext={this.nextStep} onSubmit={this.saveUser}/>;
    }
    case 2: {
      console.log('yay');
      return <AboutUser goNext={this.nextStep} goPrevious={this.previousStep} onSubmit={this.saveUser}/>;
    }
  
    default: return;
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