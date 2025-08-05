import React from 'react';
import './css/Education.css';
import EducationCard from './EducationCard';
import educationData from '../utils/eduData';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <section className="education-container">
      <h5>Education Profile</h5>

      <div className="education-content">
        <VerticalTimeline className="vertical-timeline">
          {educationData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.duration}
              iconClassName="edu-icon"
              contentClassName="edu-timeline-content no-box"
              dateClassName="date"
              contentArrowClassName="edu-timeline-arrow"
            >
              <EducationCard details={item} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
