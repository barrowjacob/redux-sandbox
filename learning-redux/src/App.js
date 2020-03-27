import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// useSelector allows you to use selectors, and dispatch allows you to use actions
import {increment} from './actions';
import {decrement} from './actions';
import {logIn} from './actions';
import {logOut} from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (

    <div className="App">
        <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(logIn())}>Log In</button>
        <button onClick={() => dispatch(logOut())}>Log Out</button>
        {isLogged ? <h3>Valuable Information I shouldn't see...</h3> : ''}

    </div>
  );
}

export default App;
