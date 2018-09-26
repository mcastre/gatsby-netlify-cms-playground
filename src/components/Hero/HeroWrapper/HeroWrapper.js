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
    flex: 0 1 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .column-two {
    flex: 1 0 40vw;
    height: 100vh;
    background: ${props => props.theme.brand.purple};
    display: flex;
    flex-direction: column;
  }
`;

const StyledAvatarWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin-top: 50%;
  transform: translateY(-50%);
  img {
    width: 100%;
    margin-bottom: 0;
  }
`;

const HeroWrapper = ({ children }) => (
  <StyledHeroWrapper>
    <section className='column-one'>
      <Nav />
      <HeroMessage></HeroMessage>
      <ColumnFooter></ColumnFooter>
    </section>
    <section className='column-two'>
      <StyledAvatarWrapper>
        <img src={avatar} alt='avatar'></img>
      </StyledAvatarWrapper>
      <ColumnFooter></ColumnFooter>
      {
        //children goes here
      }
    </section>
  </StyledHeroWrapper>
);

export default HeroWrapper;