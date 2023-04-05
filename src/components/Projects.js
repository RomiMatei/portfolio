import styled from 'styled-components';

export default function Projects() {
  return (
    <ProjectsStyled>
      <h2 className="realisations">Mes Réalisations</h2>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  background: ligtblue;

  .realisations {
    color: purple;
    font-size: 30px;
  }
`;
