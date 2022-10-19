import { NavLink } from 'react-router-dom';
//style
import classes from "./Nav.module.css";

const NavLinkComponent = () =>
{
    return (
        <nav>
            <ul>
                <li>
                    <NavLink end className={( navData ) =>  navData.isActive ? classes.active : "" } to="/">Register</NavLink>
                </li>
                <li>
                    <NavLink end className={( navData ) =>  navData.isActive ? classes.active : "" } to="/Home">Home</NavLink>
                </li>
                <li>
                    <NavLink end className={( navData ) =>  navData.isActive ? classes.active : "" } to="/Profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink end className={( navData ) =>  navData.isActive ? classes.active : "" } to="/ProjectCreate">Create Project</NavLink>
                </li>
                <li>
                    <NavLink end className={( navData ) =>  navData.isActive ? classes.active : "" } to="/ProjectManage">Manage Project</NavLink>
                </li>
                <li>
                    <NavLink end className={( navData ) =>  navData.isActive ? classes.active : "" } to="/Search">Search</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinkComponent;