import styles from './Projects.module.css';
import PropTypes from "prop-types";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import {Pagination, A11y, Autoplay, EffectCoverflow} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function Projects(props) {
    return (
        <section id="projects" className={styles.body}>
            <div className={styles.box}>
                <h2 className={styles.head}>My Projects</h2>
                <Swiper
                    className={styles.carouselContainer}
                    modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
                    spaceBetween={30}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    effect={'coverflow'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,  // Time interval between slides (in milliseconds, e.g., 3000 = 3 seconds)
                        disableOnInteraction: false,  // Keep autoplay running after user interaction
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    pagination={{
                        clickable: true,
                        el: `.${styles.customDotList}`,
                        bulletClass: styles.dotButton,
                        bulletActiveClass: styles.activeDotButton,
                    }}
                >
                    {props.data.projects.map((project, index) => (
                        <SwiperSlide key={index} className={styles.swipeCard}>
                            <ProjectCard
                                below={project.below}
                                description={project.desc}
                                name={project.name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.customDotList}></div>
            </div>
        </section>
    );
}

Projects.propTypes = {
    data: PropTypes.object.isRequired
};

export default Projects;
