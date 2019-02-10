import {createStore,combineReducers,applyMiddleware,compose}from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from "../reducer/expenses"
import filterReducer from "../reducer/filters"
import authReducer from '../reducer/auth';


const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
export default()=>{
    const store=createStore(
        combineReducers({
            expenses :expenseReducer,
            filters : filterReducer,
            auth :authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
