import React from 'react'
import styled from 'react-emotion';
import Nav from '../../../components/Navigation/Nav';
import HeroMessage from '../HeroMessage/HeroMessage';
import ColumnFooter from './Column/ColumnFooter';
import avatar from '../../../img/avatar-profile.png';

const StyledHeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  .column-one {
    flex: 0 1 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .column-two {
    flex: 1 0 30vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
`;

const StyledAvatarWrapper = styled.div`
  display: flex;
  background: ${props => props.theme.brand.purple};
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
const StyledAvatarWrapper2 = styled.div`
  display: flex;
  background: ${props => props.theme.brand.magenta};
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
const StyledAvatarWrapper3 = styled.div`
  display: flex;
  background: ${props => props.theme.brand.yellow};
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
const StyledAvatarWrapper4 = styled.div`
  display: flex;
  background: ${props => props.theme.brand.cyan};
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const HeroWrapper = ({ children }) => (
  <StyledHeroWrapper>
    <section className='column-one'>
      <Nav />
      <HeroMessage></HeroMessage>
    </section>
    <section className='column-two'>
      <StyledAvatarWrapper></StyledAvatarWrapper>
      <StyledAvatarWrapper2></StyledAvatarWrapper2>
      <StyledAvatarWrapper3></StyledAvatarWrapper3>
      <StyledAvatarWrapper4></StyledAvatarWrapper4>

      {
        //children goes here
      }
    </section>
  </StyledHeroWrapper>
);

export default HeroWrapper;