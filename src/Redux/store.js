// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './Reducers/reducer';


// Create the Redux store with reducers and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
