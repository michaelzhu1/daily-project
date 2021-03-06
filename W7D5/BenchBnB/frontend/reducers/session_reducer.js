import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, {currentUser});
    default:
      return state;
  }
};

export default SessionReducer;
