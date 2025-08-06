import React from 'react'
import styles from './css/ExperienceCard.module.css'

const EducationCard = ({ details }) => {
    return (
        <div className={styles['experience-card']}>
            <h6 className="border-b-4 border-b-[#32275f]">{details.title}</h6>
            <p>{details.job}</p>

            <ul className={styles['experience-description']}>
                {details.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div className={styles['experience-duration']}>
                {details.duration}
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
