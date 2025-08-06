// SkillsCard.jsx
import React from 'react';
import styles from './css/SkillsCard.module.css'; // updated import

const SkillsCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <div
            className={`${styles['skills-card']} ${isActive ? styles.active : ''}`}
            onClick={() => onClick && onClick()}
        >
            <div className={styles['skills-icon']}>
                <img src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    );
};

export default SkillsCard;
