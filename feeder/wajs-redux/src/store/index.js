import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import capitilizeFirstLetterofAddedUser from './middlewares';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, storeEnhancers(applyMiddleware(capitilizeFirstLetterofAddedUser, thunk)),
);

export default store;
