import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import SlashSvg from './SlashSvg';

const StyledHeroMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 35%;
  transform: translateY(-50%);
  margin-left: 2rem;
  position: relative;
  h1 {
    font-size: 5rem;
    line-height: 0.75;
    position: relative;
    z-index: 1;
    span {
      display: block;
      &.title-engineer {
        margin-left: 4rem;
      }
    }
  }
  svg {
    position: absolute;
    top: -40%;
    left: 29%;
    width: 15%;
    height: 200px;
  }
  .hero-subheader {
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      margin: 0;
      li {
        display: inline;
        margin-right: 12px;
        a  {
          color: ${props => props.theme.colors.lightGrey};
          transition: ${props => props.theme.utils.transitionAll};
          text-decoration: none;
          &:hover, &:focus {
            color: ${props => props.theme.brand.purple};
            
          }
        }
      }
    }
  }
  .hero-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    background: ${props => props.theme.brand.purple};
    border-radius: 100rem;
    margin-right: 10px;
    margin-left: 3rem;
  }
`;

const HeroMessage = () => (
  <StyledHeroMessage>
    <SlashSvg></SlashSvg>
    <h1>
      <span>Designer</span>
      <span className='title-engineer'>Engineer</span>
    </h1>
    <div className='hero-subheader'>
      <span className='hero-dot'></span>
      <ul>
        <li>
          <Link to='/about'>interface</Link>
        </li>
        <li>
          <Link to='/about'>experience</Link>
        </li>
        <li>
          <Link to='/about'>direction</Link>
        </li>
        <li>
          <Link to='/about'>branding</Link>
        </li>
        <li>
          <Link to='/about'>unicorn</Link>
        </li>
      </ul>
    </div>
  </StyledHeroMessage>
);

export default HeroMessage;