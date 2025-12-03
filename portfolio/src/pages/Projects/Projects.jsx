import { projects } from "../../data/projects";
import './Projects.css';
import { FaLaptop } from '../../icons/icons';

const Projects = () => {
    return (
        <section className="section">
            <div className="section__header">
                <h1>Dự án cá nhân</h1>
                <p className="section__subtitle">
                    Một vài dự án tiêu biểu mình đã thực hiện. Bạn có thể xem code hoặc demo trực tiếp.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article key={project.title} className="card project-card">
                        <header className="project-card__header">
                            <h2 className="card__title">{project.title}</h2>
                            <span className="project-period">{project.period}</span>
                        </header>

                        <p className="project-description">{project.description}</p>

                        <div className="project-tech">
                            {project.tech.map((t) => (
                                <span key={t} className="tag">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="project-links">
                            {project.demo && project.demo !== "#" && (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="link">
                                    🔗 Demo
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="link">
                                    <FaLaptop/>  Source
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
