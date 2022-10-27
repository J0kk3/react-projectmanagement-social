//hooks
import { useRef, useContext } from 'react';
//components
import AuthContext from '../../store/auth-context';
//styles
import classes from './ProfileForm.module.css';

const ProfileForm = () =>
{
    const changePasswordKey = process.env.REACT_APP_API_KEY_CHANGEPASSWORD_URL;

    const newPasswordInputRef = useRef();
    const authCtx = useContext( AuthContext );

    const submitHandler = e =>
    {
        e.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        //ADD VALIDATION HERE
        fetch( changePasswordKey,
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        idToken: authCtx.token,
                        password: enteredNewPassword,
                        returnSecureToken: false
                    } ),
                headers:
                {
                    "Content-Type": "application/json"
                }
            } );
    };

    return (
        <form className={ classes.form } onSubmit={ submitHandler }>
            <div className={ classes.control }>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' minLength="7" ref={ newPasswordInputRef } />
            </div>
            <div className={ classes.action }>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;