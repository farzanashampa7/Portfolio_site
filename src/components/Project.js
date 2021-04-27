import React from "react";
import "./Project.scss";
import "./Projects.scss";

function Project({ title, description, image, gitLink, techStack, className }) {
  return (
    <div className="project">
      <div className="project__info">
        <h1 className="project__header">{title}</h1>
        <p className="project__description">{description}</p>
        <div className="project__links">
          <a className="project__link" href="/">
            Demo
          </a>
          <a className="project__link" href={gitLink}>
            Git Repo
          </a>
        </div>
      </div>
      <div className="project__info">
        <div>
          <img className="project__image" src={image} alt="Budgetary" />
          <p className="project__stacks">Tech Stacks: {techStack}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
