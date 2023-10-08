import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-red-400">
      <div className="mx-auto max-w-screen-xl">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
