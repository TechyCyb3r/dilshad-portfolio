import React from 'react';
import styles from './css/Experience.module.css';
import ExperienceCard from './ExperienceCard';
import expData from '../utils/expData';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section className={styles['experience-container']}>
      <h5>Experience Profile</h5>
      <div>
        <VerticalTimeline className={styles['vertical-timeline']}>
          {expData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.duration}
              iconClassName={styles['exp-icon']}
              contentClassName={`${styles['exp-timeline-content']} ${styles['exp-timeline-element-content']}`}
              dateClassName="date"
              contentArrowClassName={styles['exp-timeline-arrow']}
            >
              <ExperienceCard details={item} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
