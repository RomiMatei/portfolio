import React, { useState } from 'react';
import styled from 'styled-components';
import { projectsData } from './projectsData/projectsData';

import Projects from './Projects';

export default function HomePage() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <HomePageStyled>
      <div className="banner-top">
        <img className="profile" src="images/photo-profil.png" alt="" />
        <span className="name">Romina Matei</span>
      </div>
      <h1>Home</h1>
      <h2 className="realisations">Mes Réalisations</h2>
      {projects.map((project) => {
        return <Projects {...project} />;
      })}
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background-color: #f5f5f7;

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
    color: green;
    margin-left: 35px;
    padding-bottom: 15px;
    border: 1px solid yellow;
  }

  .profile {
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

  .realisations {
    color: purple;
    font-size: 30px;
  }
`;
