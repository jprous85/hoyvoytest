import { createStore, combineReducers } from '@reduxjs/toolkit';
import currentUser from './reducers/currentUser';

const reducer = combineReducers({
    currentUser
});

const store = createStore(reducer);

export default store;
