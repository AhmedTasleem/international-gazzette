import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import MainSection from './components/Mainsection';
import CategoryPage from './components/CategoryPage'; // This will handle category-specific content

const App = () => {
  return (
      <Router>
          <Header />
          <Title />
          <Navbar />
          <Routes>
            <Route path="/" element={<MainSection />} /> {/* Default homepage */}
            <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Dynamic category route */}
          </Routes>
          <Footer />
    </Router> 
  );
};

export default App;