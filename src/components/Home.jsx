import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [typedText, setTypedText] = useState("");
  const projectsText = "CHECK OUT MY PROJECTS!";
  let index = 0;

  useEffect(() => {
    const typeProjectsText = () => {
      if (index < projectsText.length) {
        setTypedText((prevText) => prevText + projectsText.charAt(index));
        index++;
        setTimeout(typeProjectsText, 100); // Adjust the typing speed here
      }
    };

    typeProjectsText();
  }, []);

  return (
    <div className="home">
      <div className="container1">
        <h1 className="title">HEY, I'M MILANI KUKUMA</h1>
        <p className="intro">
          I'm a dedicated software developer specializing in crafting
          innovative and efficient solutions. With a keen eye for detail and a
          passion for problem-solving, I thrive on creating software that makes
          a positive impact and brings meaningful value to users.
        </p>
      </div>
      
      <h1 className="title">{typedText}</h1>
      <div className="container2">
        <p className="project-container">
          <Link to="/projects">projects</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
