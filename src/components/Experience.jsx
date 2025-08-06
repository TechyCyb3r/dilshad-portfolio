import React from 'react';
import './css/Experience.css';
import ExperienceCard from './ExperienceCard';
import expData from '../utils/expData';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section className="experience-container">
      <h5>Experience Profile</h5>

      <div className="experience-content">
        <VerticalTimeline className="vertical-timeline">
          {expData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.duration}
              iconClassName="exp-icon"
              contentClassName="exp-timeline-content no-box"
              dateClassName="date"
              contentArrowClassName="exp-timeline-arrow"
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
