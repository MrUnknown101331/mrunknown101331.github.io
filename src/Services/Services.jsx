import styles from './Services.module.css'
import PropTypes from "prop-types";
import SkillCard from "../SkillCard/SkillCard.jsx";

function Services(props) {
    return (
        <section id="services" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>What I do</h2>
                <div className={styles.contain}>
                    {props.data.services.map((service, index) =>
                        <SkillCard key={index} icon={service.icon} name={service.name} description={service.desc}
                                   viewBox={service.viewBox}/>
                    )}
                </div>
            </div>
        </section>
    )
}

Services.propTypes = {
    data: PropTypes.object.isRequired
}

export default Services