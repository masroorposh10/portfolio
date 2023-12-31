import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "DevOps Engineer",
          "Full Stack Developer",
          "Web Developer",
          "AI/ML Engineer.",
          "Deep Learning Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
