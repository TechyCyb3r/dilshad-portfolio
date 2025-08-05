import React from 'react';
import './css/Projects.css';
import { motion as Motion } from 'framer-motion';
import projectData from '../utils/projectData';

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projects</h2>

      <div className="projects-card">
        {projectData.map((project, index) => (
          <Motion.div
            className="projects-card-content"
            key={index}
            initial={{ opacity: 0, scale: 0.3}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 4 * 0.2 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GITHUB
                </a>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
