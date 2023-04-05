import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';

export default function HomePage() {
  return (
    <div>
      <HomePageStyled>
        <div className="banner-top">
          <img src="images/photo-profil.png" alt="" />
          <span className="name">Romina Matei</span>
        </div>
        <h1>Home</h1>
      </HomePageStyled>
      <Projects />
    </div>
  );
}

const HomePageStyled = styled.div`
  background-color: red;

  .banner-top {
    display: flex;
    align-items: flex-end;
    padding: 20px;
    justify-content: space-between;
    border: 1px solid green;
  }

  .name {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-left: 35px;
    padding-bottom: 15px;
    border: 1px solid yellow;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  h1 {
    color: grey;
    font-family: 'Alkatra', cursive;
    font-size: 40px;
  }
`;
