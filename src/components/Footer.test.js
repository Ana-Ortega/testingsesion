import React from 'react';  // declaro el ambito de react
import {shallow} from 'enzyme'; // traigo la herramienta o metodo shallow de enzyme
import Footer from './Footer'; // traigo al componente que quiero hacerle testing

//it es donde ira lo que quiero que se testee
it('Debe devolver un numero telefonico de servicio al cliente',()=> {

  const wrapper = shallow(<Footer/>); // donde le indico el componente dentro del metodo
  const span = wrapper.find('span'); // le indico que busque el tag donde esta lo que quiero testear
  const result = span.text(); // declaramos el resultado que esperamos

  expect(result).toBe('Servicio al cliente 1-800-555-444'); // declaramos lo que tiene que devolver si o si

})