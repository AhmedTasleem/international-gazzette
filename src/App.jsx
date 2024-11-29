import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <Navbar />
        <div className="main-sections">
            <div className="main-section-left">
              <h2>Main Section Left</h2>
              {/* <Ad 
              
              /> */}
            </div>
            <div className="main-section-right">
                <h2>Main Section Right</h2>
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default App;