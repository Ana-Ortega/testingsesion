import React from 'react';  
import {shallow} from 'enzyme'; 
import Header from './Header'; 

it('Debe devolver Home',()=> {

  const wrapper = shallow(<Header/>); 
  const ancor = wrapper.find('a.a1'); 
  const result = ancor.text(); 


  expect(result).toBe('Home'); 



})