import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.secondary};
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroTitle>smartBP</HeroTitle>
        <HeroSubtitle>Smartphone Based Blood Pressure Measurement System Using Mixed Attention Gated U-Net</HeroSubtitle>
        <p style={{ fontSize: '1rem', fontStyle: 'italic' }}><u><a href="https://github.com/jaideep190" target="_blank">Thakur Jaideep Singh</a></u> (thakur22102@iiitnr.edu.in) <br></br>
        <u><a href="https://github.com/abhinaybhandekar" target="_blank">Abhinay Bhandekar</a></u> (bhandekar22100@iiitnr.edu.in) <br></br>
        Dr.Debanjan Das (Senior IEEE Member)</p>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;