import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar__logo">
                <span className="logo-dot" />
                <span className="logo-text">BUIMINHPHUOC</span>
            </div>

            <nav className="navbar__links">
                <NavLink
                    to="/Portfolio/"
                    end
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link--active" : "nav-link"
                    }
                >
                    Giới thiệu
                </NavLink>
                <NavLink
                    to="/Portfolio/skills"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link--active" : "nav-link"
                    }
                >
                    Kỹ năng
                </NavLink>
                <NavLink
                    to="/Portfolio/projects"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link--active" : "nav-link"
                    }
                >
                    Dự án
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
