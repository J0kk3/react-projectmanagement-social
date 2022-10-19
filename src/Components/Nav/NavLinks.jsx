//actual links in the navbar
import { Link } from 'react-router-dom';

const NavLinks = () =>
{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Register</Link>
                </li>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
                <li>
                    <Link to="/ProjectCreate">Create Project</Link>
                </li>
                <li>
                    <Link to="/ProjectManage">Manage Project</Link>
                </li>
                <li>
                    <Link to="/Search">Search</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;