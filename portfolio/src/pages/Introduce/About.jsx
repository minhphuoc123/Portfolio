import "./About.css";
import { profile } from "../../data/profile";

const About = () => {
    return (
        <section className="section">
            <header className="cv-header">
                <div>
                    <h1 className="cv-name">{profile.name}</h1>
                    <p className="cv-position">{profile.position}</p>
                </div>
                <div className="cv-header-actions">
                    {profile.contact.github && (
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn--ghost"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </header>

            {/*CV*/}
            <div className="cv-layout">
                {/* Sidebar */}
                <aside className="cv-sidebar">
                    <div className="cv-avatar">
                        <span>{profile.initials}</span>
                    </div>

                    <div className="cv-block">
                        <h2 className="cv-block-title">Thông tin liên hệ</h2>
                        <ul className="cv-list">
                            <li>
                                <span className="cv-list-label">Email</span>
                                <span>{profile.contact.email}</span>
                            </li>
                            <li>
                                <span className="cv-list-label">Điện thoại</span>
                                <span>{profile.contact.phone}</span>
                            </li>
                            <li>
                                <span className="cv-list-label">Địa điểm</span>
                                <span>{profile.contact.location}</span>
                            </li>
                            {profile.contact.linkedin && (
                                <li>
                                    <span className="cv-list-label">LinkedIn</span>
                                    <span>{profile.contact.linkedin}</span>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="cv-block">
                        <h2 className="cv-block-title">Ngôn ngữ</h2>
                        <ul className="cv-list">
                            {profile.languages.map((lang) => (
                                <li key={lang.name}>
                                    <span className="cv-list-label">{lang.name}</span>
                                    <span>{lang.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Nội dung */}
                <div className="cv-main">
                    {/* Học vấn */}
                    <section className="cv-block">
                        <h2 className="cv-block-title">Học vấn - Mục tiêu</h2>

                        {profile.education.map((edu) => (
                            <div key={edu.degree + edu.school} className="cv-item">
                                <div className="cv-item-header">
                                    <div>
                                        <h2 className="cv-item-title">{edu.school}</h2>
                                        <h3 className="cv-item-company">{edu.degree}</h3>
                                        <p className="cv-item-company">GPA: {edu.gpa}</p>
                                    </div>
                                    <span className="cv-item-time">{edu.time}</span>
                                </div>
                                {edu.description && <p className="cv-text">{edu.description}</p>}
                            </div>
                        ))}
                    </section>

                    {/* Hoạt động */}
                    <section className="cv-block">
                        <h2 className="cv-block-title">Hoạt động & Chứng chỉ</h2>
                        <ul className="cv-item-list">
                            {profile.activities.map((act) => (
                                <li key={act}>{act}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Kỹ năng */}
                    <div className="cv-block">
                        <h2 className="cv-block-title">Kỹ năng chính</h2>
                        <ul className="cv-tag-list">
                            {profile.mainSkills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
