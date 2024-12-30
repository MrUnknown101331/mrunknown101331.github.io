import styles from './ProjectCard.module.css'
import PropTypes from "prop-types";

function ProjectCard(props) {
    return (
        <div className={styles.card}>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.below}>{props.below}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    below: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProjectCard