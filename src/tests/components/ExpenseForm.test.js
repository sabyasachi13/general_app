import React from 'react';
import {shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
test("should render Expense Form correctly",()=>{

    const wrapper =shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});

test("should render expense with data",()=>{
    const wrapper= shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();

});

test("should render error for invalid form submission",()=>{
    const wrapper =shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit',{
        preventDefault :()=>{ }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect (wrapper).toMatchSnapshot();

});

test ("should set description on input change",()=>{

    const value="testing";
    const wrapper= shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',
    {target :{value}
    });

    expect(wrapper.state('description')).toBe(value);

});

//should set note o textarea change

test("should set note on text area on change",()=>{

    const value="i am coming";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find("textarea").simulate('change',{
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value);

});

//should set amount if valid

test("should set amount if valid",()=>{
    const value="12.22";
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find("input").at(1).simulate('change',{
        target :{value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test("should set amount if not valid",()=>{
    const value="12.222";
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find("input").at(1).simulate('change',{
        target :{value}
    });
    expect(wrapper.state('amount')).toBe("");
});

test("should call onsubmitform for valid form submission ",()=>{
    const onSubmitSpy =jest.fn();
    const wrapper =shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find("form").simulate('submit',{
        preventDefault :()=>{ }
    });
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description :expenses[0].description,
        amount :expenses[0].amount,
        note :expenses[0].note,
        createdAt :expenses[0].createdAt
    })
});

test('should state new date on date change',()=>{
    const wrapper =shallow(<ExpenseForm />);
    const now= moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

//should set calendat focus on change
test("should set calendar focus on change",()=>{
    const wrapper =shallow(<ExpenseForm/>);
    const value =true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:value});
    expect(wrapper.state('calendarFocused')).toBe(value);
})


