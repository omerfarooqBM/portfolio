import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Food Delivery Web App"
              description="Food Delivery web App for both users and restaurants using firebase database and javaScript"
              link="https://omerfarooqbm.github.io/Restraunt/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Expense Tracker Web App"
              description="Tracker App For your expense made through react and redux."
              link="https://omerexp.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Chat Web App"
              description="The most complete chat UI for Reac & Webline through React."
              link="https://fochat.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Ecommerce Web App"
              description="ecommerce website through ReactJS."
              link="https://eomerce.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Weather Web App"
              description="Complete weather forecast app made with ReactJS."
              link="omerweather.surge.sh/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Quiz Web App"
              description="simple quiz game made with HTML CSS and JavaScript"
              link="https://omerfarooqbm.github.io/quiz-app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
