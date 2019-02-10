import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage'

test("should render Corrrecty Login page",()=>{
    const wrapper =shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();

});

test("should log in on button click",()=>{
    const startLogin=jest.fn();
    const wrapper =shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});