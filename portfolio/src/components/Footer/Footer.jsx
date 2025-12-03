import "./Footer.css";
import { FaLaptop } from '../../icons/icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>{new Date().getFullYear()} Bui Minh Phuoc. All rights reserved.</p>
            <p className="footer__sub">
                Built with React | Frontend Development <FaLaptop/>
            </p>
        </footer>
    );
};

export default Footer;
