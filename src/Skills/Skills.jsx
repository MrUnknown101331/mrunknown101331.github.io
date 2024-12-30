import styles from './Skills.module.css';
import PropTypes from "prop-types";

function Skills(props) {
    return (
        <section id="skills" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>My Skills</h2>
                <div className={styles.contain}>
                    <div className={styles.left}>
                        <p className={styles.title}>CERTIFICATIONS</p>
                        <ul>
                            {
                                props.data.certificates.map((certificate, index) =>
                                    <li key={index}
                                        onClick={() => window.open(certificate.link, '_blank', 'noopener,noreferrer')}>
                                        <p className={styles.inner}>{certificate.name}</p>
                                        <p className={styles.desc}>{certificate.desc}</p>
                                    </li>
                                )
                            }
                        </ul>
                        <p className={styles.title}>DEVELOPMENT SKILLS</p>
                        <p className={styles.inner}>{props.data.developmentSkill}</p>
                    </div>
                    <div className={styles.right}>
                        {
                            Object.entries(props.data.skills).map(([category, skills], index) => (
                                <div key={index} className={styles.category}>
                                    <p className={styles.title}>{category}</p>
                                    <div className={styles.bubbles}>
                                        {
                                            skills.map((skill, i) => (
                                                <div key={i} className={styles.bubble}>
                                                    {skill}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

Skills.propTypes = {
    data: PropTypes.object.isRequired
}

export default Skills