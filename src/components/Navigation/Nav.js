import React from 'react'
import styled from 'react-emotion';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Wrapper = styled.header`
  position: relative;
  align-items: center;
  display: flex;
  padding: 1.5rem 2rem;
  z-index: 1;
  a {
    color: ${props => props.theme.colors.lightGrey};
    text-decoration: none;
    transition: ${props => props.theme.utils.transitionAll};
    &:hover {
      color: ${props => props.theme.colors.darkGrey};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1rem 1rem;
    padding-bottom: 0;
    flex-wrap: none;
    flex-direction: column;
  }
`;

const Nav = () => (
  <Wrapper>
    <Logo></Logo>
    <Navbar></Navbar>
  </Wrapper>
);

export default Nav;
