import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    useFirebase();
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Signin</button>
        </div>
    );
};

export default Login;