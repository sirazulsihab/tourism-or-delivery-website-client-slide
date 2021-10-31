import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    initializeAuthentication();
    const [user, setUser] = useState({});

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])
    
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;