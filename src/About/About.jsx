import styles from './About.module.css';
import profile from '../assets/profile.png';
import {ReactTyped} from "react-typed";
import PropTypes from "prop-types";

function About(props) {
    return (
        <section id="about" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>About Me</h2>
                <div className={`${styles.contain} ${props.isSmall ? styles.smallContain : ''}`}>
                    <div className={styles.left}>
                        <img src={profile} alt="profile" className={styles.image}/>
                    </div>
                    <div className={`${styles.right} ${props.isSmall ? styles.bigRight : ''}`}>
                        <p className={styles.title}>I&#39;m {props.data.name} and I&#39;m &nbsp;
                            <ReactTyped
                                strings={props.data.punctuation_roles}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                                className={styles.roll}
                            /></p>
                        <p className={styles.description}>{props.data.about}</p>
                        <p className={styles.title}>Why Work With Me</p>
                        <p className={styles.description}>{props.data.why_me}</p>
                        <p className={styles.title}>Education</p>
                        <p className={styles.description}>{props.data.education}</p>
                        <button className={styles.button}
                                onClick={() => window.open(props.data.cv, '_blank', 'noopener,noreferrer')}>Download
                            CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

About.propTypes = {
    data: PropTypes.object.isRequired,
    isSmall: PropTypes.bool.isRequired,
}

export default About