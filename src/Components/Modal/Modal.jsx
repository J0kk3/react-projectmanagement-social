//styles
import './Modal.css';

//TODO add three birthday fields instead of one date field

const Modal = ( props ) =>
{

    return (
        <div className="Modal">
            <h1>{ props.title }</h1>
            <p>{ props.message }</p>
            <div>
                <form>
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
            <div className='closeRegisterDiv' onClick={ props.closeModal } >
                <p>Click here to close...</p>
            </div>
        </div>
    );

};

export default Modal;