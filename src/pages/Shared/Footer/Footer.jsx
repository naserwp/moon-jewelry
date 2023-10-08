// import React from 'react';
import logoImg from '../../../assets/MoonJewelery1.png'; 

const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <div className=" bg-base-200">
            <div className="max-w-screen-xl	m-0 m-auto">
                <footer className="footer p-10  text-base-content">
                    <aside>
                    <img src={logoImg} alt="Moon Jewelry Ltd." />
                        <p>Moon Jewelry Ltd.<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                    <aside>
                        <p>Copyright © {currentYear} - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </div>

        </div>
    );
};

export default Footer;