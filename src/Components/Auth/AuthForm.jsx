
import { Link } from "react-router-dom";
//hooks
import { useRef, useState, useContext } from "react";
//components
import AuthContext from "../../store/auth-context";
//import Modal from "../Modal/Modal";
// import Backdrop from "../Modal/Backdrop";
//styles
import classes from "./AuthForm.module.css";

const AuthForm = props =>
{
    const loginKey = process.env.REACT_APP_API_KEY_LOGIN_URL;
    const registerKey = process.env.REACT_APP_API_KEY_REGISTER_URL;

    const [ isLogin, setIsLogin ] = useState( true );
    const [ isLoading, setIsLoading ] = useState( false );

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext( AuthContext );

    const switchAuthModeHandler = () =>
    {
        setIsLogin( ( prevState ) => !prevState );
    };


    const submitHandler = e =>
    {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //ADD VALIDATION HERE
        //PASSWORD MUST BE 6 CHARACTERS LONG (FIREBASE RULE)

        setIsLoading( true );
        let url;

        if ( isLogin )
        {
            url = loginKey;
        }
        else
        {
            url = registerKey;
        }
        fetch( url,
            {
                method: 'POST',
                body: JSON.stringify( {
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                } ),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then( ( res ) =>
        {
            setIsLoading( false );
            if ( res.ok )
            {
                return res.json();
            }
            else
            {
                return res.json().then( ( data ) =>
                {
                    let errorMessage = "Authentication failed!";
                    if ( data && data.error && data.error.message )
                    {
                        errorMessage = data.error.message;
                    }
                    //TODO: SHOW ERROR MODAL
                    throw new Error( errorMessage );
                } );
            }
        } ).then( data =>
        {
            //SUCCESSFUL REQUEST & USER IS AUTHENTICATED
            authCtx.login( data.idToken );
        } )
            .catch( ( err ) =>
            {
                alert( err.errorMessage );
            } );
    };

    return (
        <section className="card">
            <h1>{ isLogin ? "Login" : "Sign Up" }</h1>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="E-mail" required ref={ emailInputRef } />
                </div>
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" id="password" placeholder="Pasword" required ref={ passwordInputRef } />
                </div>
                <div className={ classes.actions }>
                    { !isLoading && <button className={ isLogin ? classes.buttonLogin : classes.buttonRegister }>{ isLogin ? "Login" : "Create Account" }</button> }
                    { isLoading && <p>Sending Request...</p> }
                    <Link className={ classes.forgotPasswordLink } to="">Forgot your password?</Link>
                    <button type="button" className={ classes.toggle } onClick={ switchAuthModeHandler }>
                        { isLogin ? 'Create new account' : 'Login with existing account' }
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;