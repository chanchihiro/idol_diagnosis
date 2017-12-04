import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
); // reducerとthunkを呼び出す

export default store;