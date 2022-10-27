
const AuthSignup = () =>
{
    const registerKey = process.env.REACT_APP_API_KEY_REGISTER_URL;

    const registerHandler = e =>
    {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={ registerHandler }>
                <input className='names' type="text" id="firstName" placeholder="First Name" />
                <input className='names' type="text" id="lastName" placeholder="Last Name" />
                <input className='inputs' type="email" id="email" placeholder="E-mail" />
                <input className='inputs' type="password" id="password" placeholder="Pasword" />
                <input className='inputs' type="password" id="rePassword" placeholder="Re-type Pasword" />

                <label id='birthdayLabel' htmlFor='birthday'>Birthday</label>
                <input type='date' id='birthday' />
                <label className='radioLabel' htmlFor="radioFemale">Female</label>
                <input className='radio' id='radioFemale' type="radio" />
                <label className='radioLabel' htmlFor="radioMale">Male</label>
                <input className='radio' id='radioMale' type="radio" />
                <label className='radioLabel' htmlFor="radioCustom">Custom</label>
                <input className='radio' id='radioCustom' type="radio" />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default AuthSignup;