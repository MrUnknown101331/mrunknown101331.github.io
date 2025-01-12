import PropTypes from "prop-types";
import styles from './SkillCard.module.css';

function SkillCard(props) {
    return (
        <div className={styles.card}>
            <img
                src={`/${props.icon}`}
                alt={props.name}
                className={styles.icon}
            />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.desc}>{props.description}</p>
        </div>
    );
}

SkillCard.propTypes = {
    icon: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SkillCard;
