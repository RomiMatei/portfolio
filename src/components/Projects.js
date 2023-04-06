import styled from 'styled-components';
import { colors } from '../theme/colors';

export default function Projects({ name, id, imageSource, languages, webPage }) {
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
        <div className="project">
          <div className="project-image">
            <a href={webPage}>
              <img src={imageSource} alt="" />
            </a>
          </div>
        </div>
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  background: ${colors.lightPurple};
border-radius: 5px 5px 0 0;;


  .project-image {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    object-fit: contain;
    padding: 0 20px 0 20px;
    img {
      width: 90%;
      height: 100%;
      object-fit: contain;
      margin-left: 10px;
    }
  }

.project-info {
  margin:10px 0 10px 10px;
  padding-top: 10px;
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
      color: ${colors.secondary};
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      margin-right: 10px;
      margin-bottom: 10px;
    }
`;
