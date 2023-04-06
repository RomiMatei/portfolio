import styled from 'styled-components';

export default function Projects({ name, id, imageSource, languages }) {
  return (
    <ProjectsStyled>
      <div className="projects">
        <div className="project-info">
          <h3 className="project-name">{name}</h3>
          <div className="project-languages">
            {languages.map((language) => {
              return <span key={id}>{language}</span>;
            })}
          </div>
        </div>
        <div className="project" key={id}>
          <div className="project-image">
            <img src={imageSource} alt="" />
          </div>
        </div>
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  background: ligtblue;
  display: grid;
  grid-template-row: repeat(3, 1fr);

  .project-image {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    object-fit: contain;
    padding: 0 20px 0 20px;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
  }
`;
