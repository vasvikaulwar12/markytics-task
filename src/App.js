import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import EventList from './components/eventList/eventlist';
import AddEvent from './components/addEvent/addEvent';
import EventDetails from './components/services/services';

const App = () =>
  {

  return(
    <>
    <Router>
      <Header />
      <main>
        <Routes>
         
          <Route path="" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/EventList" element={<EventList/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/EventDetails" element={<EventDetails/>}/>
          <Route path="/AddEvent" element={<AddEvent/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
        
    </>
  )
}

export default App;