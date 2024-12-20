import styles from './home.module.css'
import {ReactTyped} from "react-typed";

function Home() {
    return (
        <section className={styles.body} id='home'>
            <p className={styles.first}>Hello, This is</p>
            <p className={styles.name}>Faizan Ahmed</p>
            <div className={styles.last}>
                <p className={styles.txt}>And, I am a &nbsp;</p>
                <ReactTyped
                    strings={[
                        'Full Stack Developer',
                        'Android Developer',
                        'Problem Solver',
                        'IoT Enthusiast',
                        'Cloud Technology Specialist',
                        'Deep Learning Researcher'
                    ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                    className={styles.roll}
                />
            </div>
            <button className={styles.button}>Hire me</button>
        </section>
    )
}

export default Home;