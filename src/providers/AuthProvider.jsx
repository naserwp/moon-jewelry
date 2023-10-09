// import React, { createContext } from 'react';

// const AuthContext = createContext(null)

// const AuthProvider = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default AuthProvider;


import React, { createContext } from 'react';
// import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// import { firebaseConfig } from '../../src/firebase/firebase.config';
// const app = initializeApp(firebaseConfig); // initialize the Firebase app

export const AuthContext = createContext(null);

// const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const user = {displayName: "AMi Nasir"};
    const authInfo = { 
        user,
        
     };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;