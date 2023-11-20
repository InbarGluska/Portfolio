import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between; /* Adjust to push links to the right */
  align-items: center;
  height: 60px;
  background-color: white;
  color: black; /* Adjust text color as needed */
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 20px; /* Add padding to space elements */
  z-index: 999; /* Ensure the header stays on top */
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.4em;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  margin-right: 50px;
`;

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <Name>Inbar Gluska</Name>
      <div>
        <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;


