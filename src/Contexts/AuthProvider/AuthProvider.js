import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'Education' }
    const [user, setUser] = useState({});

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        providerLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;