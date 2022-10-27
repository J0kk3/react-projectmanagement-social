
import { Link } from "react-router-dom";
//hooks
import { useRef, useState } from "react";
//components
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

const AuthLogin = props =>
{
    const [ isLogin, setIsLogin ] = useState( true );
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const loginKey = process.env.REACT_APP_API_KEY_LOGIN_URL;


    const loginHandler = e =>
    {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //ADD VALIDATION HERE

        if ( isLogin )
        {
            fetch( loginKey,
                {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            email: enteredEmail,
                            password: enteredPassword,
                            returnSecureToken: true
                        } ),
                    headers:
                    {
                        "Content-Type": "application/json"
                    }
                }
            ).then( res =>
            {
                if ( res.ok )
                { }
                else
                {
                    //RESPONSE FAILED
                    return res.json().then( data =>
                    {
                        let errorMessage = "Authentication failed!";
                        if ( data && data.error && data.error.message )
                        {
                            errorMessage = data.error.message;
                        }
                        //TODO: SHOW ERROR MODAL
                        // <>
                        //     { props.modalIsOpen && <Modal title={ "AUTHENTICATION ERROR" } modalIsOpen={ props.modalIsOpen } showModal={ props.showModal } closeModal={ props.closeModal } >
                        //         <p>{ errorMessage }</p>
                        //     </Modal> }
                        // </>;
                        props.showModal();
                        //PASSWORD MUST BE 6 CHARACTERS LONG (FIREBASE RULE)
                        console.log( data );
                    } );
                }
            } );
        }
    };
    return (
        <div>
            <form onSubmit={ loginHandler } className="card">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="E-mail" ref={ emailInputRef } />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Pasword" ref={ passwordInputRef } />
                <button type="submit" className="buttonLogin">Log in</button>
                <Link className="forgotPasswordLink" to="">Forgot your password?</Link>
                <hr />
                {/* <button className="buttonRegister" onClick={ props.showModal }>Create new account</button> */}
            </form>
            { props.modalIsOpen && <Modal title={ "ERROR" } modalIsOpen={ props.modalIsOpen } showModal={ props.showModal } closeModal={ props.closeModal } >
            <p>Something went wrong</p>
        </Modal> }
            { props.modalIsOpen ? ( <Backdrop show closeModal={ props.closeModal } /> ) : null }
        </div>
    );
};

export default AuthLogin;