import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper>
      <Nav>
        <Logo>smartBP</Logo>
        <NavLinks isOpen={isMenuOpen}>
          <NavItem><NavLink to="paper" smooth={true} duration={500}>Paper</NavLink></NavItem>
          <NavItem><NavLink to="mobileApp" smooth={true} duration={500}>Mobile App</NavLink></NavItem>
          <NavItem><NavLink to="dataset" smooth={true} duration={500}>Dataset</NavLink></NavItem>
          <NavItem><NavLink to="architecture" smooth={true} duration={500}>Model Architecture</NavLink></NavItem>
          <NavItem><NavLink to="fourierFit" smooth={true} duration={500}>Fourier Fit</NavLink></NavItem>
          <NavItem><NavLink to="results" smooth={true} duration={500}>Results</NavLink></NavItem>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;