// import React from 'react';
import { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaTwitter, FaUserAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const LoginPage = () => {
  useTitle('Login')
  const { signIn } = useContext(AuthContext);
  const { handleGoogleLogin } = useContext(AuthContext); // Add handleGoogleLogin
  const { user } = useContext(AuthContext);
  const displayName = user ? user.displayName : null;
  console.log('User Display Name:', displayName);
  

  const navigate = useNavigate();
  const location = useLocation();
  console.log("LOgin Page LocatiON:", location);
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <div className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <FaUserAlt></FaUserAlt>
          Login
        </div>


        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <hr className="my-6 border-t" />

        {/* Social Logins */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">Or login with:</span>
          <button className="text-3xl text-indigo-600 hover:text-indigo-700">
            <i className="fab fa-facebook"></i>
            <FaFacebookF></FaFacebookF>
          </button>
          <button className="text-3xl text-blue-400 hover:text-blue-500">
            <FaTwitter></FaTwitter>
          </button>
          {/* <button className="text-3xl text-red-600 hover:text-red-700">
            <FaGoogle></FaGoogle>
          </button> */}

          <button
            onClick={handleGoogleLogin} // Call handleGoogleLogin on button click
            className="text-3xl text-red-600 hover:text-red-700"
          >
            <FaGoogle></FaGoogle>
          </button>


        </div>
        <div>
          <p>If you haven't created an account yet, you can easily do so by  <Link to="/signup" className="text-red-700 font-bold underline">signing up here</Link>.</p>
        </div>


      </div>
    </div>
  );
};

export default LoginPage;
