import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Ticket from './components/tickets/tickets';
import Footer from './components/Footer';

//Por cada it es un test 
//Test Suites son los archivos
it("Debe hacer el render los componentes hijos Footer y Ticket", ()=> {
  const wrapper = shallow(<App/>); //Shallow nos permite testear componentes
  
  const footer = wrapper.find(Footer); // buscamos los componetes hijos
  expect(footer.exists()).toBe(true);

  const ticket = wrapper.find(Ticket); // buscamos los componetes hijos
  expect(ticket.exists()).toBe(true);


})
