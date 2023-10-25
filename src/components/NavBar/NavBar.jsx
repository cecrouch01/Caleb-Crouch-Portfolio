import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const currentPage = useLocation().pathname;
    return (
        <nav className={currentPage === '/' ? 'curtain-closed' : 'curtain-open'}>
            <h1 className={currentPage === '/' ? 'closed-title' : 'open-title'}>
                Caleb Crouch
            </h1>
            <ul className={currentPage === '/' ? 'closed-ul' : 'open-ul'}>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/project'>
                        Project
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/resume'>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar