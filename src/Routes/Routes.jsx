import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import LoginPage from "../pages/Login/LoginPage/LoginPage";
// import SignUp from "../pages/Login/SignUpPage/SignUpPage";
import SignUpPage from "../pages/Login/SignUpPage/SignUpPage";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
import Blog from "../pages/Blog/Blog";
import UserProfile from "../pages/Login/UserProfile/UserProfile";
import ClientDashboard from "../pages/Private/ClientDashboard/ClientDashboard";
import OwnerDashboard from "../pages/Private/OwnerDashboard/OwnerDashboard";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        // Add a catch-all route for 404 errors
      {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
      },
      {
        path:'all-jewelry',
        element: <AllJewelry></AllJewelry>
      },
      {
        path:'login',
        element: <LoginPage></LoginPage>
      },
      {
        path:'signup',
        element: <SignUpPage></SignUpPage>
      },
      {
        path: 'my-jewelry',
        element: <MyJewelry></MyJewelry>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'client-dashboard',
        element: <ClientDashboard></ClientDashboard>
      },
      {
        path: 'owner-dashboard',
        element: <OwnerDashboard></OwnerDashboard>
      }
      ]
    },
  ]);