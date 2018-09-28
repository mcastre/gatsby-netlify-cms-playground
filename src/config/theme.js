import { darken } from 'polished';

const brand = {
  purple: '#A729DE',
  blue: '#3AA6EF',
  teal: '#50E3C2',
  cyan: '#2CC7FD',
  green: '#73DD6E',
  yellow: '#FFE057',
  magenta: '#F340AE'
};

const colors = {
  // Grey colors
  bodyBg: '#f3f3f3',
  lightGrey: '#ccc',
  darkGrey: '#454545',

  // Text colors
  linkBlue: brand.blue,
  linkBlueHover: darken(0.1, brand.blue)
};

const breakpoints = {
  xs: '320px',
  sm: '600px',
  md: '1200px',
  lg: '1400px'
};

const utils = {
  transitionAll: 'all 300ms ease-in-out'
};

const theme = {
  brand,
  colors,
  breakpoints,
  utils
};

export default theme;