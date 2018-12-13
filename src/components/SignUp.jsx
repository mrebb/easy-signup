import React, { Component } from 'react';
// import { Redirect, BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Registration from './Registration';
import AboutUser from './AboutUser';
import './styles/SignUp.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state ={
      step: 1,
    };
  }
  updateStep(){
    let step = this.step;
    step++;
    this.setState({step});
  }
  show = (step)=>{
    switch(step) {
    case 1: {
      return <Registration onComplete={this.updateStep}/>;
    }
    case 2: {
      return <AboutUser onComplete={this.updateStep}/>;
    }
  
    default: return;
    }
  }
  render(){
    return(
      this.show(this.state.step)
    );
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