import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create login with password 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in with email pass

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
      
    }

    // logout user

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;