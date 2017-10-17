import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => dispatch => (
  APIUtil.login(user).then(outUser =>
    dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(outUser =>
    dispatch(receiveCurrentUser(outUser)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.signup().then(() =>
    dispatch(receiveCurrentUser()))
);
