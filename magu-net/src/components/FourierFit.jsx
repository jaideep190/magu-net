import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Content = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

function FourierFit() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="fourierFit" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>Fourier Fit Analysis</Title>
        <Text>
          To further validate our model's performance and understand the underlying patterns in blood pressure predictions, we conducted a Fourier fit analysis on the predicted SBP and DBP values.
        </Text>
        <div style={{ 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          margin: '2rem auto', 
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column', // Changed from 'row' to 'column'
          alignItems: 'center', // Center the images vertically
        }}>
          <img src="/images/fourierfitsbp.png" alt="fourierfitsbp" style={{ width: '80%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/fourierfitdbp.png" alt="fourierfitdbp" style={{ width: '80%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </Content>
    </Section>
  );
}

export default FourierFit;