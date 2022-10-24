/*****************
IDEA:
have login/register as a modal instead of seperate pages

/*****************/
//hooks
import { useState } from "react";
//components
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
            <div>
                <form className="card">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="E-mail" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Pasword" />
                    <button className="buttonLogin">Log in</button>
                    <p>Forgot your password?</p>
                    <hr />
                    <button className="buttonRegister" onClick={ showModal }>Create new account</button>
                </form>
                <p className="registerMessage">Cool text or whatever</p>
            </div>
            { modalIsOpen && <Modal title={ "Sign Up" } modalIsOpen={ modalIsOpen } showModal={ showModal } closeModal={ closeModal } /> }
            { modalIsOpen ? ( <Backdrop show closeModal={ closeModal } /> ) : null }
        </>
    );
};

export default AuthPage;