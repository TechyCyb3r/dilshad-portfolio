import React from 'react'
import skillsData from '../utils/skillsData';
import SkillsCard from './SkillsCard'
import styles from './css/Skills.module.css'; // Module import
import InfoCard from './InfoCard';
import { motion as Motion } from 'framer-motion';

const Skills = () => {
    const [selecetedSkill, setSelectedSkill] = React.useState(skillsData[0]);

    const handleSelectSkill = (skill) => {
        setSelectedSkill(skill);
    }

    return (
        <section className={styles['skills-container']}>
            <Motion.h5
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.4,
                }}
            >
                Technical Proficiency
            </Motion.h5>

            <div className={styles['skills-content']}>
                <Motion.div
                    initial={{ opacity: 0, x: -80, y: -40 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.4,
                        duration: 0.10,
                    }}
                    className={styles.skills}
                >
                    {skillsData.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selecetedSkill.title === item.title}
                            onClick={() => handleSelectSkill(item)}
                        />
                    ))}
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, x: 80, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 1,
                        duration: 0.20,
                    }}
                    className={styles['skills-info']}
                >
                    <InfoCard
                        heading={selecetedSkill.title}
                        skills={selecetedSkill.skills}
                    />
                </Motion.div>
            </div>
        </section>
    );
};

export default Skills;
