import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const useFirebase = () => {
    initializeAuthentication();
    const [user, setUser] = useState();

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
    }
    return {
        user,
        handleGoogleSignIn
    }
}
export default useFirebase;