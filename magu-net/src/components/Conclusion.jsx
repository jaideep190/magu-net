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

function Conclusion() {
  const [ref, controls] = useScrollAnimation();

  return (
    <Section id="conclusion" ref={ref}>
      <Content
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>Conclusion</Title>
        <Text>
          The SmartBP project demonstrates the powerful application of deep learning and 
          machine learning in developing an innovative, smartphone-based blood pressure 
          monitoring system. By leveraging advanced neural network architectures, signal 
          processing techniques, and model optimization, the team created a compact yet 
          accurate solution for non-invasive blood pressure measurement. The project's 
          success in achieving low error rates and its deployment as a user-friendly mobile 
          application showcases the potential of AI in healthcare. SmartBP not only addresses 
          the need for accessible blood pressure monitoring but also highlights the capacity of 
          machine learning to transform complex medical data into practical, real-world solutions. 
          This work paves the way for future advancements in mobile health technology, promising 
          improved healthcare accessibility and management of hypertension on a global scale.
        </Text>
      </Content>
    </Section>
  );
}

export default Conclusion;