import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//STORE
//       this holds all the data for the application

import {createStore} from 'redux';
// ^ this creates the global state


//ACTION
//        simple function that returns an object -- describes what you want to do


const increment = () => {
    return {
        type: 'INCREMENT'

    }
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};
//REDUCER
//        describes how actions transform one state into another state

const counter = (state = 0, action) => {
    // reducer takes in initial state, action
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
//DISPATCH
//        how you actually execute action

store.dispatch(increment());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
