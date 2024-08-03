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

function ModelArchitecture() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="architecture" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>Model Architecture</Title>
        <Text>
          SmartBP is an autonomous, non-invasive smartphone application for blood pressure measurement. It utilizes the smartphone's camera and flash to capture PPG signals from the user's fingertip, employing advanced signal processing techniques for accurate blood pressure estimation.
        </Text>
        <Text>
          Mixed Attention Gated U-Net Model
          The core innovation of SmartBP lies in its utilization of a Mixed Attention Gated U-Net (MAGU) model for blood pressure estimation. This advanced architecture enhances feature extraction and prediction accuracy through a combination of convolutional and attention mechanisms.

          Key components:
          <ul>
            <li>Conv1D layers for initial feature extraction from time-series PPG data</li>
            <li>MaxPooling1D layers for efficient down-sampling and dimensionality reduction</li>
            <li>ResidualBlocks to mitigate the vanishing gradient problem and preserve contextual information</li>
            <li>MixedAttentionBlock for enhanced feature selection, combining spatial and channel attention</li>
            <li>MixedGatedAttentionBlock for dynamic attention mechanism, allowing the model to focus on the most relevant features</li>
            <li>Decoder with Conv1D layers and Mixed Attention modules for improved feature representation</li>
            <li>Global Average Pooling 1D layers for final SBP and DBP predictions</li>
          </ul>
          The model was implemented using TensorFlow 2.0.0 and Keras, with a total size of approximately 40 MB, later optimized to 14 MB using TensorFlow Lite for efficient smartphone deployment.
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
          <img src="/images/model_architecture.png" alt="Paper" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </Content>
    </Section>
  );
}

export default ModelArchitecture;