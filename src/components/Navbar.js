import React from 'react';
import trollface from '../images/Troll Face.svg';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledNavbar>
      <img className="header--img" src={trollface} alt="Troll Face logo" />
      <h2 className="header--text">Meme Generator</h2>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  color: white;
  padding: 20px;

  .header--img {
    height: 100%;
    margin-right: 6px;
  }

  .header--text {
    font-size: 1.25rem;
    margin-right: auto;
  }
`;

export default Navbar;
