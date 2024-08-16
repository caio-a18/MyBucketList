import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from '@material-ui/core/styles'; // Import ThemeProvider from Material-UI

import { reducers } from './reducers';
import App from './App';
import './index.css';
import theme from './styles/theme'; // Import your custom theme

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}> {/* Wrap the app with ThemeProvider */}
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
