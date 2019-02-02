import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore'
import {addExpense} from "../src/actions/expenses";
import {setTextFilter} from "../src/actions/filters";
import getVisibleExpenses from "../src/selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store =configureStore();

store.dispatch(addExpense({description:"water bill",amount:1100,createdAt:-21000}));
store.dispatch(addExpense({description:"gas bill",amount:8900,createdAt:100}));
store.dispatch(addExpense({description:"rent",amount:0,createdAt:21000}));

const state=store.getState();
const visibleExpenses =
 getVisibleExpenses(state.expenses,state.filters);
 console.log(visibleExpenses);

 const jsx =(
     <Provider store={store}>
         <AppRouter />
     </Provider>
 );

ReactDOM.render(jsx,document.getElementById('app'));