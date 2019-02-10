import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';
//import ReactShallowRenderer from 'react-test-renderer/shallow';


// test ('should render Header Correctly',()=>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// })


test("should render Header Correctly",()=>{
     const wrapper=shallow(<Header startLogout = {()=>{ }}/>);
     expect(wrapper).toMatchSnapshot();


     //expect(wrapper.find('h1').length).toBe(1);  
 })

 //should call startLogout on Button Click

test("should log out on button click",()=>{
    const startLogout=jest.fn();
    const wrapper =shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});