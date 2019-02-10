import React from 'react';
import {shallow } from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let startEditExpense,startRemoveExpense,history,wrapper;
startEditExpense =jest.fn();
startRemoveExpense =jest.fn();
history={push :jest.fn()};
wrapper =shallow(<EditExpensePage 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[2]}
    />);
//should render Editexpense page

test("should render Editexpense page",()=>{  
    expect(wrapper).toMatchSnapshot();
});

//should handle edit expense 

test("should handle edit expense",()=>{
     wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);

     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
})


test("should handle delete an expense",()=>{
    wrapper.find("button").simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
})