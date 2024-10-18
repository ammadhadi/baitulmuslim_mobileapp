import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  authenticateReducer,
  tokenRefreshReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/auth';
import {
  sendRecoveryCodeReducer,
  validateCodeReducer,
  changePasswordReducer,
} from './reducers/user';

const reducer = combineReducers({
  // auth
  auth: authenticateReducer,
  tokenRefresh: tokenRefreshReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  // Rcovery API
  sendRecoveryCode: sendRecoveryCodeReducer,
  validateCode: validateCodeReducer,
  changePassword: changePasswordReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
