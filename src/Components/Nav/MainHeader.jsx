//components
import NavLinkComponent from "./NavLinks";
//style
import classes from "./Nav.module.css";

const MainHeader = () =>
{
    return (
        <header className={ classes.header }>
            <NavLinkComponent />
        </header>
    );
};

export default MainHeader;