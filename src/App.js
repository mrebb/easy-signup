import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './containers/SignUp.jsx';
import store from './store/store.js';
import './App.css';
import './components/styles/Common.scss';
import './components/styles/AllDone.scss';
import './components/styles/Header.scss';
import './components/styles/FinalScreen.scss';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <div className="App">
              <Header/>
              <Route exact path="/" component={SignUp} />
            </div>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
