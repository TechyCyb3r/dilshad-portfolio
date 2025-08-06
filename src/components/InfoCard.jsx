import React from 'react';
import styles from './css/InfoCard.module.css'; // Updated import
import { motion as Motion } from 'framer-motion';

export default function SkillsInfoCard({ heading, skills }) {
    return (
        <div className={styles.skillsInfoCard}>
            <h6>{heading}</h6>
            <div className={styles.skillsInfoContent}>
                {skills.map((item, index) => (
                    <div key={index}>
                        <div
                            className={styles.skill}
                            style={{ border: `3px solid ${item.color}` }}
                        >
                            <img
                                src={item.icon}
                                alt={item.skill}
                                className={styles.skillIcon}
                            />
                        </div>
                        <div className={styles.skillTextContainer}>
                            <p style={{ color: item.color }}>{item.skill}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
