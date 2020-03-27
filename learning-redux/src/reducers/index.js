import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
// import reducers into one index

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
});

//combine reducers into one reducer to import into src/index.js
export default rootReducer;