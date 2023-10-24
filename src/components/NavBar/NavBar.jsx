import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const currentPage = useLocation().pathname;
    return (
        <nav className='nav-bar'>
            <h1 className='title'>
                Caleb Crouch
            </h1>
            <ul>
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
                        project
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