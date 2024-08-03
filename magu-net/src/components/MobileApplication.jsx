import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.backgroundAlt};
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

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 2rem;
`;

function MobileApplication() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="mobileApp" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>smartBP Application</Title>
        <Text>
          smartBP is an autonomous, non-invasive smartphone application for blood pressure measurement. It utilizes the smartphone's camera and flash to capture PPG signals from the user's fingertip, employing advanced signal processing techniques for accurate blood pressure estimation.
        </Text>
        <Text>
          Key features:
          <ul>
            <li>Edge-based methodology for real-time processing, ensuring minimal latency</li>
            <li>Platform independent architecture, compatible with Android devices</li>
            <li>Intuitive user interface designed for ease of use and accessibility</li>
            <li>Utilizes advanced Mixed Attention Gated U-Net model for high-precision predictions</li>
            <li>Implements robust signal filtering and artifact removal algorithms</li>
            <li>Real-time PPG signal extraction and processing</li>
            <li>Accurate SBP and DBP estimation comparable to traditional BP monitoring devices</li>
          </ul>
          The application has been tested on various smartphone models, including iPhone 12(Web Application), VIVO Y21, and Realme 5i, demonstrating consistent performance across different hardware configurations.
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
          <img src="/images/app.png" alt="Paper" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
        <div style={{ 
        display: 'flex',
        justifyContent: 'center'
        }}>
          <a href="https://drive.google.com/file/d/1ZoLCzuhn4jIwI4gLnqGmV0zfreHOU6QU/view" target="_blank" rel="noopener noreferrer"><u>Access the app</u></a>
        </div>
      </Content>
    </Section>
  );
}

export default MobileApplication;