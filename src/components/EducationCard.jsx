import React from 'react'
import './css/EducationCard.css'
const EducationCard = ({ details }) => {
    return (
        <div className="education-card">
            <h6 className="border-b-4 border-b-[#32275f]">{details.title}</h6>
            <p>
                Institute: {details.degree}
            </p>
            <p> 
                {details.score}
            </p>
            <p>
                {details.location}
            </p><br />

            <div className="education-duration">{details.duration}
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
