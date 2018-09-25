import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming';
import Nav from '../components/Navigation/Nav';
import NavBackground from '../components/Navigation/NavBackground/NavBackground';
import theme from '../config/theme';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet title="Home | Gatsby + Netlify CMS" />
      <NavBackground width='1600px' height='220px' viewBox='0 0 1900 360'></NavBackground>
      <Nav />
      <div>{children}</div>
    </React.Fragment>
  </ThemeProvider>
);

export default TemplateWrapper
