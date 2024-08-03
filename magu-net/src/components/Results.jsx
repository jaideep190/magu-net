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

function Results() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="results" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>Results and Performance</Title>
        <Text>
          SmartBP demonstrates high accuracy in blood pressure prediction, meeting British Hypertension Society (BHS) Grade B criteria, a widely recognized standard in blood pressure measurement accuracy:
        </Text>
        <Text>
          Key results:
          - Mean Absolute Error (MAE): 2.96 mmHg for Systolic Blood Pressure (SBP), 1.9 mmHg for Diastolic Blood Pressure (DBP)
          - BHS Grade B accuracy achieved for both SBP and DBP, indicating clinical-grade performance
          - Consistent performance across different smartphone models, demonstrating robust cross-device compatibility
          - 95% Confidence Interval within ±8 mmHg for SBP and ±6 mmHg for DBP
          - Real-time testing conducted on 13 individuals using both iPhone 12 and Realme 5i smartphones
          - Comparison with automatic wrist blood pressure monitor showed high correlation
        </Text>
        <Text>
          The Bland-Altman plot demonstrates good agreement between predicted and true blood pressure values, with most points falling within the 95% confidence interval. The error distribution histogram shows that a significant number of predictions have minimal absolute error, indicating high accuracy in blood pressure estimation.
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
          <img src="/images/error_metric.png" alt="data1" style={{ width: '80%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/bhs_criteria.png" alt="data2" style={{ width: '80%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/bhs_gradeB.png" alt="data2" style={{ width: '80%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/error_plot1.png" alt="data2" style={{ width: '80%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/blandaltman_plot.png" alt="data2" style={{ width: '80%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} /> {/* Added marginBottom to create space between images */}
          <img src="/images/error_comparisons.png" alt="data2" style={{ width: '80%', height: 'auto', borderRadius: '8px' }} />
        </div>
      </Content>
    </Section>
  );
}

export default Results;