import App from './app';
import React from 'react';
import { Provider } from 'react-redux';


const Root = ({ store }) => (
  <div>
    <h1>TO DO APPPPPPPPP!!!!!!</h1>
    <Provider store={ store }>
      <App />
    </Provider>
  </div>
);

export default Root;
