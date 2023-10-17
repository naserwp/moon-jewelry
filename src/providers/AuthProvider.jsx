import React, { createContext, useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../src/firebase/firebase.config';

import { getAuth, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Define the Google provider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("logged user", loggedUser);
            setUser(loggedUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // const handleGoogleLogin = () => {
    //     signInWithPopup(auth, googleProvider)
    //       .then(result => {
    //         const user = result.user;
    //         console.log('Google Sign-In User:', user);
    //       })
    //       .catch(error => {
    //         console.error('Google Sign-In Error:', error);
    //       });
    // };

    const handleGoogleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading (true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signOut = () => {
        setLoading(true);
        // return signOut(auth);
        return auth.signOut();
    }

    const authInfo = {
        user,
        signIn,
        createUser,
        signOut,
        handleGoogleLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;







/*
********************************
Version 2.5 -2023
import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import app from '../../src/firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("logged user", loggedUser);
            setUser(loggedUser);
        })

        return () => {
            unsubscribe();
        }
    })

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log('Google Sign-In User:', user);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error('Google Sign-In Error:', error);
          });
      };
      

      


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

   

    const signOut = () => {
        setLoading(true);
        // return signOut(auth);
        return auth.signOut();
    }




    const authInfo = {
        user,
        signIn,
        createUser,
        signOut,
        handleGoogleLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

*/




/*************
*Version 1
*************/
// import React, { createContext } from 'react';
// // import { getAuth } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import app from '../../src/firebase/firebase.config';



// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// // const auth = getAuth(app);
// const AuthProvider = ({ children }) => {

//     const user = null;
//     const signIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const authInfo = {
//         user,
//         createUser,
//         signIn
//      };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;