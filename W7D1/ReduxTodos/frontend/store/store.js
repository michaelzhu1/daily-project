import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

function configureStore() {
  return createStore(rootReducer);
}

export default configureStore;
