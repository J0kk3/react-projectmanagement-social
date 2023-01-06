import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//components
import AuthContext from '../../store/auth-context';
//style
import classes from "./Nav.module.css";

const NavLinkComponent = () =>
{
    const authCtx = useContext( AuthContext );
    const navigate = useNavigate();

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () =>
    {
        authCtx.logout();
        //REDIRECT WHEN LOGGED OUT
        navigate("/");
    };

    return (
        <nav>
            <ul>
                { !isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/">Login</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/homepage">Home</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/profile">Profile</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/projectcreate">Create Project</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/projectmanage">Manage Project</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/search">Search</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <button onClick={ logoutHandler }>Logout</button>
                    </li>
                ) }
            </ul>
        </nav>
    );
};

export default NavLinkComponent;