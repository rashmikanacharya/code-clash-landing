
import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CardsSection from '../components/Cards/Card';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default Index;
