import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Navbar from './components/layout/Navbar';
import ContactForm from './components/contact/ContactForm';
import ContactList from './components/contact/ContactList';

import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div>
         <Navbar/>
         <br/>
         <div className="container" style={{display:'flex'}}>
           <div style={{flex:'1'}}>
            <ContactForm />
           </div>
           <div style={{flex:'1'}}>
           <ContactList/> 
           </div>
         </div>
      </div>
      </Provider>
    )
  }
}

export default App;
