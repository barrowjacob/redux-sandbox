import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
// ^ this creates the global state
import rootReducer from './reducers';
import {Provider} from 'react-redux';
//connects global state AKA store to app

//STORE
//       this holds all the data for the application
const store = createStore(
    rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// ^ redux devtools is just an extension for chrome that allows you to see the states of various stores

//ACTION
//        simple function that returns an object -- describes what you want to do


//REDUCER
//        describes how actions transform one state into another state
// this can be placed in other files for clarity

//DISPATCH
//        how you actually execute action

// store.dispatch(increment());


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
