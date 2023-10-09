import { Link } from 'react-router-dom';
import logoImg from '../../../assets/MoonJewelery1.png';
import userProfilePic from '../../../assets/category/cate5.jpg';


const NavBar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-jewelry">All Jewelry</Link></li>
        <li><Link to="/my-jewelry">My Jewelry</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>

    return (

        <div>
            {/* <img src={logoImg} alt="Moon Jewelry Ltd." /> */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl w-full h-auto display">
                        <img src={logoImg} className='w-52 h-auto' alt="Moon Jewelry Ltd." />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={userProfilePic} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/client-dashboard">Client Dashboard</Link></li>
                            <li><Link to="/owner-dashboard">Owner Dashboard</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;