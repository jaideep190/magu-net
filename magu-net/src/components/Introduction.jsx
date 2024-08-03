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

function Introduction() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="paper" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>Introduction</Title>
        <Text>
          This paper presents a novel approach to blood pressure measurement utilizing smartphone technology and advanced deep learning techniques. Our methodology leverages photoplethysmography (PPG) signals captured via smartphone cameras, combined with state-of-the-art neural network architectures for precise blood pressure estimation.
        </Text>
        <Text>
          Key contributions of this research include:
          <ul>
            <li>Development of an autonomous and non-invasive blood pressure measurement system using only a smartphone</li>
            <li>Implementation of a Mixed Attention Gated U-Net (MAGU) model for accurate blood pressure prediction</li>
            <li>Optimization of the model for edge deployment, reducing size to 14MB while maintaining high accuracy</li>
            <li>Achieving a mean absolute error (MAE) of 2.96 mmHg for Systolic Blood Pressure (SBP) and 1.90 mmHg for Diastolic Blood Pressure (DBP)</li>
            <li>Extensive testing on various smartphone models and comparison with standard BP monitors</li>
          </ul>
          The research addresses the growing need for accessible and frequent blood pressure monitoring, particularly in low- and middle-income countries where hypertension is prevalent but often underdiagnosed.
        </Text>
        <div style={{ 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          margin: '2rem auto', 
          maxWidth: '800px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img src="/images/paper.png" alt="Paper" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center'
      }}>
        <a href="https://drive.google.com/file/d/10uAircuhzgGHoexZ-j0F3pTDopLMNw0h/view" target="_blank" ><u>Access the paper</u></a>
      </div>
      </Content>
    </Section>
  );
}

export default Introduction;