import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import theme from '../../../config/theme';

const StyledNavbar = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  a:not(:first-child) {
    margin-left: 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    order: 2;
    font-size: 1rem;
    margin: 1rem 0;
  }
`;

const active = css`
  color: ${theme.brand.purple} !important;
`;

const Navbar = () => (
  <StyledNavbar>
    <Link to='/about' activeClassName={css`${active};`}>
      Resume
    </Link>
    <Link to='/products' activeClassName={css`${active};`}>
      Work
    </Link>
    <Link to='/products' activeClassName={css`${active};`}>
      Ideas
    </Link>
    <Link to='/products' activeClassName={css`${active};`}>
      Contact
    </Link>
  </StyledNavbar>
);

export default Navbar;