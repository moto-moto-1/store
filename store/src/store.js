import {createStore,applyMiddleware} from 'redux';
import rootreducer from './reducers';
import thunk from 'redux-thunk';

const initstat={};
const middleware=[thunk];



const store=createStore(
    rootreducer,
    initstat,
    applyMiddleware(...middleware))

    export default store;