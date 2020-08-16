import React from 'react';
import {shallow} from 'enzyme';
import Ticket from './tickets';

//it es donde ira lo que quiero que se testee
// cada it es un test
it("Debe devolver el incremento del evento cuando se haga un click al boton",() => {

  const wrapper = shallow(<Ticket />); //Shallow nos permite testear componentes

  const total = wrapper.find("h2.total").text()  //convierte a un string con .text()
  expect(total).toBe("0") 

  const button = wrapper.find("button"); // buscamos el componente que queremos testear

  // simula ser un usuario
  button.simulate("click");  //Simula un click
  button.simulate("click");

  const total12 = wrapper.find("h2.total").text(); //Encuentra el componente

  expect(total12).toBe("2") // que espera despues de hacer los clicks


})


it("Debe devolver un props",() => {

  const wrapper = shallow(<Ticket name={"Super Bowl Tickets"} />);
  const title = wrapper.find("h2.title").text()  //convierte a un string
  
  expect(title).toBe("Super Bowl Tickets")




})