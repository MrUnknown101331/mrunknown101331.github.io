import styles from './home.module.css';
import {ReactTyped} from "react-typed";
import PropTypes from "prop-types";

function Home(props) {
    return (
        <section className={styles.body} id='home'>
            <p className={styles.first}>Hello, This is</p>
            <p className={styles.name}>{props.data.name}</p>
            <div className={styles.last}>
                <p className={styles.txt}>And, I am&nbsp;
                    <ReactTyped
                        strings={props.data.punctuation_roles}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    /></p>
            </div>
            <button className={styles.button}
                    onClick={() => window.open(props.data.linkedin, '_blank', 'noopener,noreferrer')}>Hire me
            </button>
        </section>
    )
}

Home.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Home;