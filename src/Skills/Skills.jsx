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
                        {/*    right*/}
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