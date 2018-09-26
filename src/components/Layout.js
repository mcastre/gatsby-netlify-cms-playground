import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming';
import HeroWrapper from '../components/Hero/HeroWrapper/HeroWrapper';
import theme from '../config/theme';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet title="Home | Gatsby + Netlify CMS" />
      <HeroWrapper children={children}></HeroWrapper>
    </React.Fragment>
  </ThemeProvider>
);

export default TemplateWrapper
