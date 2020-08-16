import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Tickets from './components/tickets/tickets';
import Ticket from './components/tickets/tickets';

function App() {
  return (
    <div>

      <Ticket name="Super Bowl Tickets"/>
      <Footer/>
      <Header/>
    </div>
  );
}

export default App;
