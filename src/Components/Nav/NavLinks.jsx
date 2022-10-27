import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
//components
import AuthContext from '../../store/auth-context';
//style
import classes from "./Nav.module.css";

const NavLinkComponent = () =>
{
    const authCtx = useContext( AuthContext );

    const isLoggedIn = authCtx.isLoggedIn;

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
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/Home">Home</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/Profile">Profile</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/ProjectCreate">Create Project</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/ProjectManage">Manage Project</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <NavLink end className={ ( navData ) => navData.isActive ? classes.active : "" } to="/Search">Search</NavLink>
                    </li>
                ) }
                { isLoggedIn && (
                    <li>
                        <button>Logout</button>
                    </li>
                ) }
            </ul>
        </nav>
    );
};

export default NavLinkComponent;