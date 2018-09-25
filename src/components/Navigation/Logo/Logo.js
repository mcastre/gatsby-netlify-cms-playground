import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import SvgLogo from './SvgLogo';
import theme from '../../../config/theme';

const StyledLogo = styled.div`
  a {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.darkGrey};
    transition: ${props => props.theme.utils.transitionAll};
    &:hover, &:focus {
      color: ${props => props.theme.brand.purple};
      text-decoration: none !important;
      svg {
        transform: scale(1);
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 1.05rem;
      color: ${props => props.theme.colors.darkGrey};
    }
    svg {
      margin-right: 1rem;
      transition: ${props => props.theme.utils.transitionAll};
      transform: scale(0.9);
      @media (max-width: ${props => props.theme.breakpoints.sm}) {
        margin-right: 0.7rem;
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const Logo = () => (
  <StyledLogo>
    <Link to='/'>
      <SvgLogo width='35px' height='35px' viewBox='0 0 102 102' fill={theme.colors.darkGrey}></SvgLogo>
      Martín Castre
    </Link>
  </StyledLogo>
);

export default Logo;