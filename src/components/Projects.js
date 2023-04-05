import styled from 'styled-components';

export default function Projects({ name, id, imageSource, languages }) {
  return (
    <ProjectsStyled>
      <div className="projects">
        <div className="project" key={id}>
          <div className="project-image">
            <img src={imageSource} alt="" />
          </div>
          <div className="project-info">
            <h3 className="project-name">{name}</h3>
            <div className="project-languages">
              {languages.map((language) => {
                return <span key={language}>{language}</span>;
              })}
            </div>
          </div>
        </div>
        );
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  background: ligtblue;
  display: grid;

  .project-image {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    object-fit: cover;
  }
`;
