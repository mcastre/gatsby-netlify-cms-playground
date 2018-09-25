import React from 'react';
import styled from 'react-emotion';

const StyledNavBackground = styled.div`
  svg {
    position: absolute;
    top: 0;
    right: -300px;
    z-index: 0;
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      width: ${props => props.theme.breakpoints.sm};
      top: 10px;
      right: 0;
    }
  }
`;

const NavBackground = ({
  width = '100%',
  height = '100%',
  viewBox = '0 0 1900 360'
}) =>
  <StyledNavBackground>
    <svg width={width} height={height} viewBox={viewBox}>
      <defs>
        <linearGradient x1="90.1868661%" y1="-54.2620849%" x2="76.9471823%" y2="78.5053748%" id="linearGradient-1">
          <stop stopColor="#CD82FF" offset="0%"></stop>
          <stop stopColor="#9F4BFD" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M354.601562,-1.42108547e-14 C421.555444,75.3103219 599.648438,230.882813 806.596855,186.548793 C1013.54527,142.214773 1364.27954,128.001518 1523.51477,163.83373 C1682.75,199.665942 1767.71094,249.414063 1842.60235,313.748463 C1892.52996,356.638063 1927.66251,318.610556 1948,199.665942 L1929.63204,-52.3300178 C1100.51068,-62.1100059 680.77081,-67 670.412435,-67 C654.874871,-67 287.647681,-75.3103219 354.601562,-1.42108547e-14 Z" id="Path" fill="url(#linearGradient-1)"></path>
      </g>
    </svg>
  </StyledNavBackground>;

export default NavBackground;