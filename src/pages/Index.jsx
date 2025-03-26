
import React from 'react';
import Header from '../components/Header/Header';
import ModernHero from '../components/ModernHero/ModernHero';
import CardsSection from '../components/Cards/Card';

const Index = () => {
  return (
    <div className="home-page">
      <Header />
      <ModernHero />
      <CardsSection />
    </div>
  );
};

export default Index;
