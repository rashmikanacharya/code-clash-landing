
import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CardsSection from '../components/Cards/Card';

const Index = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <CardsSection />
    </div>
  );
};

export default Index;
