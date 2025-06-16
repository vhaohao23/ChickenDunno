import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const locations = ["Ambattur", "Avadi", "Thirumullaivoyal", "Poompozilnagar", "Mugapair"];

const links = ["Home", "About", "Menu", "Gallery", "Contact"];

const company = ["Terms & Conditions", "Privacy Policy", "Cookie Policy"];

const Footer = () => (
    <footer className="w-full bg-yellow-600 border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
                {/* Logo and Description */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <img 
                        src="chickenLogo.png" 
                        alt="Logo" 
                        className="w-32 h-20 object-contain mb-6 hover:scale-105 transition-transform duration-300" 
                    />
                    <p className="text-white text-base sm:text-lg mb-6 max-w-xs">
                        Every meal is a joy — every guest is a friend
                    </p>
                    <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
                        <a 
                            href="#" 
                            className="bg-white rounded-full shadow-md p-2.5 sm:p-3 hover:bg-gray-50 transition-transform hover:scale-110"
                        >
                            <FaFacebookF className="text-orange-400 text-lg sm:text-xl" />
                        </a>
                        <a 
                            href="#" 
                            className="bg-white rounded-full shadow-md p-2.5 sm:p-3 hover:bg-gray-50 transition-transform hover:scale-110"
                        >
                            <FaInstagram className="text-orange-400 text-lg sm:text-xl" />
                        </a>
                        <a 
                            href="#" 
                            className="bg-white rounded-full shadow-md p-2.5 sm:p-3 hover:bg-gray-50 transition-transform hover:scale-110"
                        >
                            <FaTwitter className="text-orange-400 text-lg sm:text-xl" />
                        </a>
                    </div>
                </div>

                {/* Footer Columns */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8">
                    {/* Locations */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white mb-4 sm:mb-6">
                            Locations
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {locations.map((loc) => (
                                <li 
                                    key={loc} 
                                    className="text-base sm:text-lg text-white hover:text-gray-100 transition-colors cursor-pointer"
                                >
                                    {loc}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white mb-4 sm:mb-6">
                            Links
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {links.map((link) => (
                                <li 
                                    key={link} 
                                    className="text-base sm:text-lg text-white hover:text-gray-100 transition-colors cursor-pointer"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white mb-4 sm:mb-6">
                            Company
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {company.map((item) => (
                                <li 
                                    key={item} 
                                    className="text-base sm:text-lg text-white hover:text-gray-100 transition-colors cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-yellow-500/30 text-center">
                <p className="text-white text-sm sm:text-base">
                    © {new Date().getFullYear()} Chicken Dunno. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
