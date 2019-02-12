import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from '../../components/LoadingPage';


test("for the loading page",()=>{
    const wrapper =shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
})