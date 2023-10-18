import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
