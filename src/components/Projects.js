import styled from 'styled-components';
import { colors } from '../theme/colors';

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
  background: ${colors.lightPurple};
  display: grid;


  .project-image {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    object-fit: contain;
    padding: 0 20px 0 20px;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
  }

  .project-name {
    font-size: 20px;
    font-weight: 600;
    color: ${colors.secondary};
    margin-bottom: 10px;
  }

  .project-languages {
    display: flex;
    flex-wrap: wrap;
    span {
      background-color: ${colors.lightGrey};
      color: #6f737e;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      margin-right: 10px;
      margin-bottom: 10px;
    }
`;
