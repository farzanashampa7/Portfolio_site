import React from "react";
import Project from "./Project";
import Budgetary from "../assets/images/Budgetary.PNG";
import Amazon from "../assets/images/Amazon-clone.PNG";
import Brainflix from "../assets/images/Brainflix.PNG";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__header">Projects</h2>
      <Project
        className="projects__first"
        title="Budgetary"
        description="An interactive animal fact generator for different animals around the world. Pick from a number of different animals or cycling through them automatically."
        image={Budgetary}
        gitLink="https://github.com/farzanashampa7/Capstone_project"
        techStack="React, Sass, Node.js, Express, Passport"
      />

      <Project
        className="project__second"
        title="Amazon Clone"
        description="An interactive animal fact generator for different animals around the world. Pick from a number of different animals or cycling through them automatically."
        image={Amazon}
        gitLink="https://github.com/farzanashampa7/Amazon_clone"
        techStack="React, Sass, Firebase, Stripe, MaterialUI, context API"
      />

      <Project
        className="project__third"
        title="Brainflix"
        description="An interactive animal fact generator for different animals around the world. Pick from a number of different animals or cycling through them automatically."
        image={Brainflix}
        gitLink="https://github.com/farzanashampa7/farzana-shampa-brainflix"
        techStack="React, Sass, Node.js, Express"
      />
    </div>
  );
}

export default Projects;
