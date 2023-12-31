import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello There, I am <span className="purple"> Masroor Posh </span>
            from <span className="purple"> Canada. </span>
            <br /> I am a software engineering student at University of Calgary.
            <br />
            I have worked as a fullstack Software developer, AI/ML Engineer, Data Scientist and more. In different sectors like Fintech, Energy, Low Power AI and more. 
            <br />
            <br />
            Apart from that, I also have many other skills like working with cloud AWS lambda functions, EC2, Terraform and YAML. Where I have create Project related to those.
          </p>
          <ul>
            <p>A few things I like:  </p>
            <li className="about-activity">
              <ImPointRight /> Meditate.
            </li>
            <li className="about-activity">
              <ImPointRight /> Running.
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
