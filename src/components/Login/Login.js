import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignIn} = useAuth()
    return (
        <div>
            <h1>Login Page</h1>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Signin</button>
        </div>
    );
};

export default Login;