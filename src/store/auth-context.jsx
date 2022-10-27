import React from "react";
//hooks
import { useState } from "react";

const AuthContext = React.createContext(
    {
        token: '',
        isLoggedIn: false,
        Login: ( token ) => { },
        Logout: () => { },
    } );

//Managing the auth-related state
export const AuthContextProvider = ( props ) =>
{
    //JWT token state
    const [ token, setToken ] = useState( null );

    //converts truthy or falsy values to true or false
    const userIsLoggedIn = !!token;

    const loginHandler = ( token ) =>
    {
        setToken( token );
    };

    const logoutHandler = () =>
    {
        setToken( null );
    };

    const contextValue =
    {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={ contextValue }>{ props.children }</AuthContext.Provider>;
};

export default AuthContext;
