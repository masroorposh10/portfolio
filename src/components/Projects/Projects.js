import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MPCODE from "../../Assets/MPCODE.png";
import motionpromax from "../../Assets/motionpromax.png"
import legacy from "../../Assets/legacy.png";
import cicd from "../../Assets/cicd.png";
import javaproj from "../../Assets/javaproj.png";
import country from "../../Assets/country.png";
import company from "../../Assets/company.png";
import wordle from "../../Assets/wordle.png";
import cicd1 from "../../Assets/cicd1.png";
import nlp from "../../Assets/nlp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my pinned projects: 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={motionpromax}
              isBlog={false}
              title="Motion ProMax"
              description="MotionProMax is a sleek and secure web app that simplifies note-taking. With its login/logout feature, you can access your notes from anywhere without worrying about them getting deleted. Stay organized and boost productivity with MotionProMax."
              ghLink="https://github.com/masroorposh10/MotionProMax"
              demoLink="https://motionpromax.netlify.app"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={MPCODE}
              isBlog={false}
              title="MPCODE"
              description="MP Code is a feature-rich code editor powered by Next.js and Express.js. It integrates MongoDB for data storage and leverages serverless backends for scalability. With ChatGPT integration, it offers interactive code explanations and optimizations."
              ghLink="https://github.com/masroorposh10/MPCODE.git"
              demoLink="https://mpcode.vercel.app"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={cicd}
              isBlog={false}
              title="Calculator CI/CD"
              description="The CI/CD Calculator project automates the development and deployment of a Python calculator app. Leveraging Terraform, GitHub Actions, and YAML, it streamlines code changes, testing, and deployment. This efficient pipeline enhances collaboration and ensures rapid iterations for a seamless calculator application experience."
              ghLink="https://github.com/masroorposh10/calculator-CI-CD.git"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={legacy}
              isBlog={false}
              title="The Legacy Project"
              description="The Legacy Project is a React-based web application that serves as an obituary platform for legendary individuals. By integrating with AWS Python Lambda and the ChatGPT OpenAI API, it generates heartfelt condolence paragraphs based on uploaded pictures, names, and dates. Cloudinary is used for image storage, and Amazon Polly converts the generated text into speech. API keys are securely stored in AWS Systems Manager."
              ghLink="https://github.com/masroorposh10/The-Legacy"
              demoLink="https://legacy-project.netlify.app"
            />
          </Col>
          <p style={{ color: "white", fontSize:"24px" }}>
          Here are my other projects: 
        </p>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={javaproj}
              isBlog={false}
              title="Company Schedule java app"
              description="The Schedule App is a Java Swing-based application that allows users to manage and view schedules efficiently. Leveraging an SQL database, the app enables seamless storage and retrieval of schedule data. With its intuitive user interface and robust functionality, users can easily create, update, and access schedules, improving organization and productivity."
              ghLink="https://github.com/masroorposh10/Company-Schedule-builder.git"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={wordle}
              isBlog={false}
              title="Wordle"
              description="The Wordle Game is an engaging and interactive web-based word guessing game developed using HTML, CSS, and JavaScript. Players are challenged to guess a hidden word by entering guesses, and the game provides feedback on correct letters and their positions. With its visually appealing design and dynamic gameplay, the Wordle Game offers an enjoyable and immersive experience for users to test their word-solving skills and have fun."
              ghLink="https://github.com/masroorposh10/wordle.git"     
            />
          </Col>


          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="General Country Data"
              description="Country Statistics Analyzer This program is designed to analyze and visualize various statistics of a specific country, as well as provide an overview of statistics for all countries in the world. It utilizes the Python libraries pandas, NumPy, to import from csv and Matplotlib to perform data manipulation, computation, and visualization."
              ghLink="https://github.com/masroorposh10/GeneralCountryData.git"
             
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={company}
              isBlog={false}
              title="company database python app"
              description="The Company Database Python App is a robust application designed to efficiently manage employee and administrative data. With its intuitive user interface, the app provides seamless interaction with a SQL database. Users can easily add, update, and retrieve employee information, while the administration features enable streamlined tasks for managing company data. This app simplifies data organization, enhances productivity, and ensures accurate and secure information management for the company's operations."
              ghLink="https://github.com/masroorposh10/CompanyData-PythonApp.git"     
            />
          </Col>
          <p style={{ color: "white", fontSize:"24px" }}>
          Some Exciting projects: 
        </p>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cicd1}
              isBlog={false}
              title="CI-CD Demo"
              description="In a recent CI/CD project, we successfully implemented a seamless deployment process for AWS Lambda functions. Leveraging the power of GitHub Workflows and Terraform, we achieved efficient automation from code commits to production. By integrating GitHub repositories with AWS services, we streamlined the development and deployment pipeline. With Terraform's infrastructure-as-code approach, we easily provisioned and managed the required AWS resources, ensuring consistent and scalable environments for our Lambda functions."
              ghLink="https://github.com/masroorposh10/cicd-demo.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="NLP Language Tracker"
              description="In my personal NLP project, I created a language checker model. Leveraging advanced NLP techniques, it accurately detects and corrects language errors in text. Using GitHub Workflows for continuous integration, I established an efficient deployment pipeline. By leveraging a large language corpus and powerful algorithms, my model enhances language accuracy and improves writing quality. This project showcases the potential of NLP for automating language checking and enhancing text quality."
              ghLink="https://github.com/masroorposh10/NLP-Language-Model.git"     
            />
          </Col>
        </Row>
      </Container>
      <h1 style={{color:"blanchedalmond"}}>For more amazing <strong style={{color:"purple"}}>projects </strong> visit my <strong style={{color:"olive"}}>github:</strong> </h1>
        <h2 style={{color:"Highlight"}}>https://github.com/masroorposh10</h2>
    </Container>
  );
}


export default Projects;