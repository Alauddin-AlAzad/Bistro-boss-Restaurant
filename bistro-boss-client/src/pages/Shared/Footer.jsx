import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            {/* Top Split Section */}
            <div className="flex flex-col md:flex-row text-white text-center">
                {/* Left: Contact Us */}
                <div className="w-full md:w-1/2 bg-[#1F2937] py-16 px-6 space-y-3">
                    <h3 className="text-2xl font-medium uppercase tracking-wider mb-4">CONTACT US</h3>
                    <p className="text-gray-300 text-sm">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-gray-300 text-sm">+88 123456789</p>
                    <p className="text-gray-300 text-sm">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-gray-300 text-sm">Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Right: Follow Us */}
                <div className="w-full md:w-1/2 bg-[#111827] py-16 px-6 space-y-4 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-medium uppercase tracking-wider">Follow US</h3>
                    <p className="text-gray-300 text-sm">Join us on social media</p>
                    <div className="flex items-center gap-6 text-2xl pt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-[#151515] py-4 text-center text-gray-300 text-sm">
                <p>Copyright © Alauddin Al Azad. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;