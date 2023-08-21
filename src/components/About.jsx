import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-content">
      Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </p>
      <p className="about-content">
        Hi, I'm Milani Kukuma, a passionate software developer with a love for crafting elegant and efficient solutions. I enjoy turning complex problems into simple, clean, and intuitive code. With a strong foundation in web development, I'm skilled in creating user-friendly, responsive, and interactive web applications.
      </p>
      <p className="about-content">
        My journey into software development started when I discovered my fascination with building digital solutions that make a positive impact. I constantly seek to learn and grow, exploring new technologies and staying up-to-date with industry trends. My goal is to create meaningful software that solves real-world challenges and enhances user experiences.
      </p>
      <p className="about-content">
        Feel free to check out some of my <Link to="/projects">projects</Link> to see the work I've done and the technologies I've used.
      </p>
    </div>
  );
}

export default About;
