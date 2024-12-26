import styles from "./TopBar.module.css"
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

function TopBar(props) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const homeSection = document.getElementById('home');
            const aboutSection = document.getElementById('about');
            const servicesSection = document.getElementById('services');
            const skillsSection = document.getElementById('skills');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');

            // Set active section based on scroll position
            if (contactSection && offset >= contactSection.offsetTop - 150) {
                setActiveSection('#contact');
            } else if (projectsSection && offset >= projectsSection.offsetTop - 150) {
                setActiveSection('#projects');
            } else if (skillsSection && offset >= skillsSection.offsetTop - 150) {
                setActiveSection('#skills');
            } else if (servicesSection && offset >= servicesSection.offsetTop - 150) {
                setActiveSection('#services');
            } else if (aboutSection && offset >= aboutSection.offsetTop - 150) {
                setActiveSection('#about');
            } else if (homeSection && offset >= homeSection.offsetTop - 150) {
                setActiveSection('#home');
            }

            // Change navbar style when scrolled
            if (offset > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (
        <nav className={`${scrolled ? styles.shortHead : styles.head} ${props.isSmall ? styles.smallHead : ""}`}>
            <a href="#home" className={activeSection === '#home' ? styles.selected : ""}
               onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
            <a href="#about" className={activeSection === '#about' ? styles.selected : ""}
               onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
            <a href="#services" className={activeSection === '#services' ? styles.selected : ""}
               onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </nav>
    )
}

TopBar.propTypes = {
    isSmall: PropTypes.bool.isRequired,
}

export default TopBar