import styles from './home.module.css';
import {ReactTyped} from "react-typed";
import PropTypes from "prop-types";

function Home(props) {
    return (
        <section className={styles.body} id='home'>
            <p className={styles.first}>Hello, This is</p>
            <p className={`${styles.name} ${props.isSmall ? styles.smallName : ''}`}>{props.data.name}</p>
            <div className={`${styles.last} ${props.isSmall ? styles.smallLast : ''}`}>
                <p className={styles.txt}>And, I am&nbsp;
                    <ReactTyped
                        strings={props.data.punctuation_roles}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    /></p>
            </div>
            <button className={`${styles.button} ${props.isSmall ? styles.smallButton : ''}`}
                    onClick={() => window.open(props.data.linkedin, '_blank', 'noopener,noreferrer')}>Hire me
            </button>
        </section>
    )
}

Home.propTypes = {
    data: PropTypes.object.isRequired,
    isSmall: PropTypes.bool.isRequired,
};

export default Home;