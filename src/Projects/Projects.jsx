import styles from './Projects.module.css';
import PropTypes from "prop-types";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section id="projects" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>My Projects</h2>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass={styles.carouselContainer}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass={styles.customDotList}
                    itemClass="carousel-item-padding-40-px"
                >
                    {props.data.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            below={project.below}
                            description={project.desc}
                            name={project.name}
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

Projects.propTypes = {
    deviceType: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};

export default Projects;
