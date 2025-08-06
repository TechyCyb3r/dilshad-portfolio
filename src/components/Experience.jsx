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
    <section className={styles.experienceContainer}>
      <h5>Experience Profile</h5>
      <div>
        <VerticalTimeline className={styles.verticalTimeline}>
          {expData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.duration}
              iconClassName={styles.expIcon}
              contentClassName={`${styles.expTimelineContent} ${styles.expTimelineElementContent}`}
              dateClassName="date"
              contentArrowClassName={styles.expTimelineArrow}
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
