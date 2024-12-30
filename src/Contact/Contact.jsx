import styles from './Contact.module.css';
import PropTypes from "prop-types";
import {IoPerson} from "react-icons/io5";
import {FaLocationDot} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {LuLanguages} from "react-icons/lu";
import {TbBrandGithub} from "react-icons/tb";
import {TbBrandLinkedin} from "react-icons/tb";

function Contact(props) {
    const details = [
        {icon: <IoPerson className={styles.icon}/>, top: 'Name', bottom: props.data.name},
        {icon: <FaLocationDot className={styles.icon}/>, top: 'Address', bottom: props.data.address},
        {icon: <MdEmail className={styles.icon}/>, top: 'Email', bottom: props.data.email},
        {icon: <LuLanguages className={styles.icon}/>, top: 'Languages', bottom: props.data.languages},
    ]

    return (
        <section id="contact" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>Contact Me</h2>
                <div className={styles.contain}>
                    <div className={styles.left}>
                        <p className={styles.title}>Get in Touch</p>
                        <p className={styles.desc}>{props.data.contact}</p>
                        {
                            details.map((detail, index) =>
                                <div className={styles.detailCont} key={index}>
                                    {detail.icon}
                                    <div className={styles.details}>
                                        <p className={styles.topDetail}>{detail.top}</p>
                                        <p className={styles.bottomDetail}>{detail.bottom}</p>
                                    </div>
                                </div>
                            )
                        }
                        <div className={styles.socials}>
                            <TbBrandGithub className={styles.social} key={0}
                                           onClick={() => window.open(props.data.github, '_blank', 'noopener,noreferrer')}/>
                            <TbBrandLinkedin className={styles.social} key={1}
                                             onClick={() => window.open(props.data.linkedin, '_blank', 'noopener,noreferrer')}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.title}>Email me</p>
                        <form>
                            <div>
                                <input/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

Contact.propTypes = {
    data: PropTypes.object.isRequired
}

export default Contact