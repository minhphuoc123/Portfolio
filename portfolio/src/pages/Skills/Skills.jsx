import { skills } from "../../data/skills";
import './Skills.css';

const Skills = () => {
    return (
        <section className="section">
            <div className="section__header">
                <h1>Kỹ năng</h1>
                <p className="section__subtitle">
                    Tổng hợp các kỹ năng đã và đang sử dụng trong quá trình học tập & làm dự án.
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((group) => (
                    <div key={group.category} className="card">
                        <h2 className="card__title">{group.category}</h2>
                        <ul className="skill-list">
                            {group.items.map((skill) => (
                                <li key={skill.name} className="skill-list__item">
                                    <span>{skill.name}</span>
                                    <span className="skill-level">{skill.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
