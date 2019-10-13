import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../redux';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
