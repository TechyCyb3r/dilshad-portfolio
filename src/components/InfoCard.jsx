import React from 'react'
import "./css/InfoCard.css"
import { motion as Motion } from 'framer-motion';

export default function SkillsInfoCard({ heading, skills }) {
    return (
        <div
            className="skillsInfoCard">
            <h6>{heading}</h6>
            <div
                className="skillsInfoContent">
                {skills.map((item, index) => (
                    <div key={index}>
                        <div className="skill" style={{ border: `3px solid ${item.color}` }}>
                            <img src={item.icon} alt={item.skill} className="skillIcon" />
                        </div>
                        <div className="skillTextContainer">
                            <p style={{ color: item.color, }} >{item.skill}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}