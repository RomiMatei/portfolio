import React from 'react';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="banner-top">
        <img src="images/photo-profil.png" alt="" />
        <span className="title">Romina Matei</span>
      </div>
      <h1>Home</h1>
      <p>Home page</p>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background-color: red;

  .banner-top {
    display: flex;
    align-items: flex-end;
    padding: 10px;

    border: 1px solid green;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-left: 35px;
    padding-bottom: 15px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;
