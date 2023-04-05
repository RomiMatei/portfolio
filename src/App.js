import React from 'react';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <HomePageStyled>
      <img src="images/photo-profil.png" alt="" />
      <h1>Home</h1>
      <p>Home page</p>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background-color: red;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;
