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
            from <span className="purple"> Calgary, Alberta.</span>
            <br /> I am a software engineering student at University of Calgary.
            <br />
            I have worked as a fullstack Software developer for GeoS(A Calgary Based company which works with efficient drilling and geothermal processes) 
            I worked on the Geopredict webapp where I used Fast API for the backend and a postGre SQL. and for the frontend I used react.
            <br />
            <br />
            Apart from that, I also have many other skills like working with cloud AWS lambda functions, EC2, Terraform and YAML. Where I have create Project related to those.
          </p>
          <ul>
            <p>A few things I like:  </p>
            <li className="about-activity">
              <ImPointRight /> Watching Anime.
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Things.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing footbal/soccer.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
