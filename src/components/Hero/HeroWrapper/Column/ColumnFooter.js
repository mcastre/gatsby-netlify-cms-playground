import React from 'react';
import styled from 'react-emotion';

const StyledColumnFooter = styled.div`
  background-color: rgba(0,0,0,0.1);
  padding: 1.5rem 2rem;
  color: white;
  margin-top: auto;
`;

const ColumnFooter = () => (
  <StyledColumnFooter>
    Footer stuffs
  </StyledColumnFooter>
);

export default ColumnFooter;