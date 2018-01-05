import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import AppContainer from './AppContainer.jsx';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk)),
      app = (
          <Provider store={ store }>
             <AppContainer />
          </Provider> 
      );

ReactDOM.render(app, document.getElementById('root'));