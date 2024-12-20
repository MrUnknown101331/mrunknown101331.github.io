import styles from "./TopBar.module.css"
import {useEffect, useState} from "react";

function TopBar() {
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
            if (contactSection && offset >= contactSection.offsetTop - 50) {
                setActiveSection('#contact');
            } else if (projectsSection && offset >= projectsSection.offsetTop - 50) {
                setActiveSection('#projects');
            } else if (skillsSection && offset >= skillsSection.offsetTop - 50) {
                setActiveSection('#skills');
            } else if (servicesSection && offset >= servicesSection.offsetTop - 50) {
                setActiveSection('#services');
            } else if (aboutSection && offset >= aboutSection.offsetTop - 50) {
                setActiveSection('#about');
            } else if (homeSection && offset >= homeSection.offsetTop - 50) {
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


    return (
        <nav className={scrolled ? styles.shortHead : styles.head}>
            <a href="#home" className={activeSection === '#home' ? styles.selected : ""}>Home</a>
            <a href="#about" className={activeSection === '#about' ? styles.selected : ""}>About</a>
            <a href="#services" className={activeSection === '#services' ? styles.selected : ""}>Services</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </nav>
    )
}

export default TopBar