import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming';
import Nav from '../components/Navigation/Nav';
import theme from '../config/theme';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet title="Home | Gatsby + Netlify CMS" />
      <Nav />
      <div>{children}</div>
    </React.Fragment>
  </ThemeProvider>
);

export default TemplateWrapper
