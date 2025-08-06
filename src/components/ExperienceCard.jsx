import React from 'react'
import './css/ExperienceCard.css'
const EducationCard = ({ details }) => {
    return (
        <div className="experience-card">
            <h6 className="border-b-4 border-b-[#32275f]">{details.title}</h6>
            <p>{details.job}</p>
            <ul className="experience-description">
                {details.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="experience-duration">{details.duration}
                {details.responsibilities && (
                    <ul>
                        {details.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    )
}

export default EducationCard
