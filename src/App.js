import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <HeroSection />
      </Wrapper>
    </>
  );
};

export default App;
