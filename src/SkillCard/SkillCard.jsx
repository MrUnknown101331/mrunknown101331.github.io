import PropTypes from "prop-types";
import styles from './SkillCard.module.css';

function SkillCard(props) {
    return (
        <div className={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox={props.viewBox}// Define the viewBox to match the icon's coordinate system
                 className={styles.icon}>
                <defs>
                    <linearGradient id="iconGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffffff"/>
                        <stop offset="50%" stopColor="#d0e8ff"/>
                        <stop offset="100%" stopColor="#a8d8ff"/>
                    </linearGradient>
                </defs>
                <path d={props.icon} fill="url(#iconGradient)"/>
            </svg>
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
