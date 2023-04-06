import React, { useState } from 'react';
import styled from 'styled-components';
import { projectsData } from './projectsData/projectsData';

import Projects from './Projects';
import { colors } from '../theme/colors';

export default function HomePage() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <HomePageStyled>
      <div className="banner-top">
        <img className="profile" src="images/photo-profil.png" alt="" />
        <span className="name">Romina Matei</span>
      </div>
      <h1>Hello, bienvenues sur mon portfolio !</h1>
      <h2 className="realisations">Mes Réalisations</h2>
      {projects.map((project) => {
        return <Projects {...project} />;
      })}
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background-color: ${colors.lightGrey};
  padding: 20px;

  .banner-top {
    display: flex;
    align-items: flex-end;
    padding: 20px;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .name {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.darkGrey};
    margin-left: 35px;
    padding-bottom: 15px;
  }

  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${colors.white};
  }

  h1 {
    color: grey;
    font-family: 'Alkatra', cursive;
    font-size: 40px;
  }

  .realisations {
    color: ${colors.mediumGrey};
    font-size: 30px;
  }
`;
