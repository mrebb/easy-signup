import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import signupReducer from './reducer/signup.js';
import UsersReducer from './reducer/users.js';
import logger from '../middleware/logger.js';
import validator from '../middleware/validator.js';

const appReducer = combineReducers({
  signupState: signupReducer,usersState:UsersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk, logger,validator))
);
