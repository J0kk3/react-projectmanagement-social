//hooks
import { useState } from "react";
//components
import AuthLogin from "../../Components/Auth/AuthLogin";
import AuthSignup from "../../Components/Auth/AuthSignup";
import Modal from "../../Components/Modal/Modal";
import Backdrop from "../../Components/Modal/Backdrop";
//styles
import './AuthPage.css';

const AuthPage = () =>
{
    //const [ isLogin, setIsLogin ] = useState( true );
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
                <AuthLogin showModal={ showModal } />
                <p className="registerMessage">Cool text or whatever</p>
            </>
            { modalIsOpen && <Modal title={ "Sign Up" } modalIsOpen={ modalIsOpen } showModal={ showModal } closeModal={ closeModal } >
                <AuthSignup />
            </Modal> }
            { modalIsOpen ? ( <Backdrop show closeModal={ closeModal } /> ) : null }
        </>
    );
};

export default AuthPage;