import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test ('Should render Expense List With expense',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);

    expect(wrapper).toMatchSnapshot();
});

test('should render when Expense list is empty ',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);

    expect(wrapper).toMatchSnapshot();
})