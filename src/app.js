import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore'
import {startSetExpenses} from "../src/actions/expenses";
import {setTextFilter} from "../src/actions/filters";
import getVisibleExpenses from "../src/selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'

const store =configureStore();
 const jsx =(
     <Provider store={store}>
         <AppRouter />
     </Provider>
 );

ReactDOM.render(<p>Loading ...</p>,document.getElementById('app')); 

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  });