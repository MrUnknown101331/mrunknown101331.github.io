import styles from './Services.module.css'
import PropTypes from "prop-types";

function Services(props) {
    return (
        <section id="services" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>What I do</h2>
                <div className={styles.contain}>

                </div>
            </div>
        </section>
    )
}

Services.propTypes = {
    data: PropTypes.object.isRequired
}

export default Services