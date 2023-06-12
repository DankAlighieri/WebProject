import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import Header from './components/templates/Header';
import Main from './components/templates/Main';
import Footer from './components/templates/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
