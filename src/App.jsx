import React from 'react';
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
      <div>
        <p>Mainsection</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;