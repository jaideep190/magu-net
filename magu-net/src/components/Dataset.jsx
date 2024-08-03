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

const SubTitle = styled.h3`
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.secondary};
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

function Dataset() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="dataset" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>Dataset and Data Visualization</Title>
        <Text>
          Our study utilizes a subset of the MIMIC-III database, spanning from 2001 to 2008, sampled at 125 Hz. This dataset, comprising 862,492 records of PPG and ABP signals, underwent rigorous preprocessing to ensure data quality and validity.
        </Text>
        
        <SubTitle>Key aspects of our data preparation</SubTitle>
        <Text>
          - Focus on 7-second signal episodes for analysis<br></br>
          - Region of Interest (ROI) determination to mitigate uneven lighting effects in smartphone captures<br></br>
          - Data normalization using min-max technique, constraining values to [-2, 2] range<br></br>
          - Normalization formula: Xnormalized = (X - min(X)) / (max(X) - min(X))<br></br>
          - Implementation of a Butterworth filter for PPG signal cleaning<br></br>
        </Text>
        <SubTitle>Data Visualization</SubTitle>
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
          <img src="/images/data1.png" alt="data1" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/data2.png" alt="data2" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </Content>
    </Section>
  );
}

export default Dataset;