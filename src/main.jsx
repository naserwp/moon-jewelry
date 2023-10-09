import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
// import router from './Routes/Routes.jsx';
// import AuthProvider from './providers/AuthProvider';





// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider
//         router={router}
//       ></RouterProvider>
//     </AuthProvider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-red-400">
      <div className="mx-auto max-w-screen-xl">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </div>
  </React.StrictMode>,
)