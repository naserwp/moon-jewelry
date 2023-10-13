import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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


    // const signIn = async (email, password) => {
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //         setUser(userCredential.user);
    //         return userCredential.user;
    //     } catch (error) {
    //         console.error('Error signing in:', error);
    //         throw error;
    //     }
    // };

     // const createUser = async (email, password) => {
    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //         setUser(userCredential.user);
    //         return userCredential.user;
    //     } catch (error) {
    //         console.error('Error creating user:', error);
    //         throw error;
    //     }
    // };


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


    //   const signOutUser = async () => {
    //     try {
    //       await auth.signOut();
    //       setUser(null);
    //     } catch (error) {
    //       console.error('Error signing out:', error);
    //       throw error;
    //     }
    //   };



    const authInfo = {
        user,
        signIn,
        createUser,
        signOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;





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