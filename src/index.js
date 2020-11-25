import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  mainStore from './mainReduce';
import createSagaMiddleware from 'redux-saga';
import  rootReducers  from  './store/reducers';
//import rootSaga from './sagas';
import rootSaga from './store/sagas'
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../src/pages/Home/screens/Home';
import Login from '../src/pages/Login/Login';
import Menu from './Menu';
import  NavigationHelper  from '../src/navigation/NavigationHelper'

//import { createWhitelistFilter } from 'redux-persist-transform-filter';

const config = {
  timeout: 50000,
  key: 'root',
  storage,
  whitelist: [
      'appReducer',
      'addonReducer',
      'usageReducer',
      'loginReducer',
      'homeDashboardReducer'
  ],
  debug: true, // to get useful logging
  transforms: [
  ]
};
const sagaMiddleware = createSagaMiddleware();
//let store = createStore(rootReducers,applyMiddleware(sagaMiddleware));
const reducers = persistCombineReducers(config,rootReducers);
let store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
        <NavigationHelper />
   </BrowserRouter>
</Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
