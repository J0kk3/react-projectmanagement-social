//hooks
import { useState } from "react";
//components
import AuthForm from "../../Components/Auth/AuthForm";
//styles
import './AuthPage.css';

const AuthPage = () =>
{
    const [ modalIsOpen, setModalIsOpen ] = useState( false );

    const showModal = e =>
    {
        e.preventDefault();
        setModalIsOpen( true );
    };

    const closeModal = () =>
    {
        setModalIsOpen( false );
    };

    return (
        <>
            <div>
                <h1 className="pageTitle">Name of site</h1>
                <p className="pageUnderTitle">Purpose of site</p>
            </div>
            <>
                <AuthForm modalIsOpen={ modalIsOpen } showModal={ showModal } closeModal={ closeModal } setModalIsOpen={ setModalIsOpen } />
                <p className="registerMessage">Cool text or whatever</p>
            </>
        </>
    );
};

export default AuthPage;