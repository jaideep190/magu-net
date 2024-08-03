import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  padding: 2rem 0;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Content>
        <Text>© 2024 smartBP Project. All rights reserved.</Text>
        <Text>Website Developer - Thakur Jaideep Singh</Text>
        <SocialLinks>
          <SocialLink href="https://github.com/jaideep190" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/jaideep190" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="thakur22102@iiitnr.edu.in">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </Content>
    </FooterWrapper>
  );
}

export default Footer;