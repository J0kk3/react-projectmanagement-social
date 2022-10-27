import { Link } from "react-router-dom";


const AuthLogin = props =>
{
    const loginHandler = e =>
    {
        e.preventDefault();
    };

    <div>
        <form onSubmit={ loginHandler } className="card">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="E-mail" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Pasword" />
            <button className="buttonLogin">Log in</button>
            <Link className="forgotPasswordLink" to="">Forgot your password?</Link>
            <hr />
            <button className="buttonRegister" onClick={ props.showModal }>Create new account</button>
        </form>
    </div>;
};

export default AuthLogin;