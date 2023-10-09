// import React, { createContext } from 'react';
// import { initializeApp } from 'firebase/app';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { firebaseConfig } from '../firebase/firebase.config';

// export const AuthContext = createContext(null);

// // Initialize the Firebase app
// const app = initializeApp(firebaseConfig); // Make sure to import firebaseConfig from your configuration file
// const auth = getAuth(app); // Get the auth object



// const AuthProvider = ({ children }) => {
//   const user = null;

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const authInfo = {
//     user,
//     createUser,
//     auth, // Include the auth object in the context
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;






import React, { createContext } from 'react';
// import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../src/firebase/firebase.config';


// import { firebaseConfig } from '../../src/firebase/firebase.config';
// const app = initializeApp(firebaseConfig); // initialize the Firebase app

export const AuthContext = createContext(null);
const auth = getAuth(app);

// const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const user = null;

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { 
        user,
        createUser
     };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;