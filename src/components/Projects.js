import React from "react";
import Project from "./Project";
import Budgetary from "../assets/images/Budgetary.PNG";
import Amazon from "../assets/images/amazon-clone-2.png";
import Brainflix from "../assets/images/Brainflix_2.png";
import Rock_Paper_Scissor from "../assets/images/Rock-Paper-Scissor.PNG";
import "./Projects.scss";
import "./Project.scss";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__header">Projects</h2>
      <Project
        className="project__first"
        title="Budgetary"
        description="An interactive app for keeping track of monthly expenses. Add your income monthly income and expenses, it will keep track of all expenses and alert when expense is exceeding income."
        image={Budgetary}
        gitLink="https://github.com/farzanashampa7/Capstone_project"
        techStack="React, Sass, Node.js, Express, Passport"
      />

      <Project
        className="project__second"
        title="Amazon Clone"
        description="An interactive E-commerce app similiar to Amazon with real time payment functionality using Stripe."
        image={Amazon}
        gitLink="https://github.com/farzanashampa7/Amazon_clone"
        techStack="React, Sass, Firebase, Stripe, MaterialUI, context API"
      />

      <Project
        className="project__third"
        title="Brainflix"
        description="A video streaming site as Youtube where you you can upload new videos and interact via comments."
        image={Brainflix}
        gitLink="https://github.com/farzanashampa7/farzana-shampa-brainflix"
        techStack="React, Sass, Node.js, Express"
      />

      <Project
        className="project__third"
        title="Rock Paper Scissor Game"
        description="This 'Rock Paper Scissor' game was a pair programming project built in 5 hours with one of my peer in BrainStation."
        image={Rock_Paper_Scissor}
        gitLink="https://github.com/farzanashampa7/Pair_programming"
        techStack="React, Sass, Node.js, Express"
      />
    </div>
  );
}

export default Projects;
