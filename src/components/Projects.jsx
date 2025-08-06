import React from 'react';
import styles from './css/Projects.module.css';
import projectData from '../utils/projectData';

const Projects = () => {
  return (
    <div className={styles['projects-container']}>
      <h2>Projects</h2>
      <div className={styles['projects-card']}>
        {projectData.map((project) => (
          <div key={project.id} className={styles['projects-card-content']}>
            <div className={styles['project-info']}>
              <h3>{project.title}</h3>
              <ul className={styles['project-points']}>
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
