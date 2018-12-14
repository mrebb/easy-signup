import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import store from './store/store.js';
import './App.css';
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
