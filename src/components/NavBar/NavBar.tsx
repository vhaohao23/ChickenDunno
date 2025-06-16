"use client";
import { APP_ROUTES } from "@/constants/routes";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useOrder } from "@/context/OrderContext";

export function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [username, setUsername] = useState("Guest");
    const [showLogoutMenu, setShowLogoutMenu] = useState(false);
    const { totalItems } = useOrder();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const storedUsername = localStorage.getItem("username") || "Guest";
        setUsername(storedUsername);
        setIsLoggedIn(!!userId);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
        setUsername("Guest");
        setIsLoggedIn(false);
        setShowLogoutMenu(false);
    };

    return (
        <motion.nav
            className={`sticky top-0 flex w-full justify-center z-[99999] mb-5 ${
                scrolled ? "shadow-lg" : ""
            }`}
        >
            <motion.div
                style={{
                    width: "100%",
                    backdropFilter: "none",
                    boxShadow: "none",
                    transition: "background-color 0.3s, box-shadow 0.3s bg-",
                }}
                className="px-2 sm:px-4 lg:px-8 flex justify-between items-center bg-white/90 min-h-[60px]"
            >
                <div className="flex gap-2 items-center mx-2 sm:mx-4 md:mx-8 my-1 sm:my-2">
                    <img className="w-8 sm:w-10 md:w-14" src="/clogo.png" alt="" />
                    <div className="font-extrabold text-lg sm:text-xl md:text-2xl text-blue-950">ChickenDunno</div>
                </div>
                <div className="hidden md:flex gap-2 lg:gap-4 items-center text-base lg:text-lg">
                    {APP_ROUTES.map((route) => (
                        <Link
                            key={route.name}
                            href={route.route}
                            className="relative px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-2xl font-medium transition-colors duration-300"
                            style={{ overflow: "visible" }}
                        >
                            {pathname === route.route && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 z-0 bg-orange-900 rounded-2xl"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                            <span
                                className={
                                    pathname === route.route
                                        ? "relative z-10 text-white font-bold"
                                        : "relative z-10 text-(--dark-blue)"
                                }
                            >
                                {route.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <Link href="/order">
                    <button className="relative">
                        <img src="/cart.png" alt="Cart" className="w-6 sm:w-8 md:w-10 lg:w-12" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs sm:text-sm font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4  sm:mr-4 md:mr-8">
                    {isLoggedIn ? (
                        <div className="relative">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-base sm:text-lg md:text-xl font-bold text-white"
                                    onClick={() => setShowLogoutMenu(!showLogoutMenu)}
                                >
                                    {username ? username.charAt(0).toUpperCase() : "?"}
                                </button>
                                <span className="font-semibold text-xs sm:text-base md:text-lg">{username}</span>
                            </div>

                            {showLogoutMenu && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-[99999]">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link href="/login">
                                <button className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base text-gray-700 hover:text-gray-900 font-medium rounded-lg transition-colors duration-200">
                                    Login
                                </button>
                            </Link>
                            <Link href="/register">
                                <button className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="md:hidden ml-2">
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-md hover:bg-gray-200 focus:outline-none">
                        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="absolute top-full left-0 w-full flex flex-col items-start shadow-md py-3 px-3 sm:px-6 gap-1 sm:gap-2 md:hidden z-[99999] bg-white"
                        style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            boxShadow: "0 4px 40px rgba(0, 0, 0, 0.2)",
                            transition: "background-color 0.3s, box-shadow 0.3s",
                            borderRadius: "0",
                        }}
                    >
                        {APP_ROUTES.map((route) => (
                            <Link
                                key={route.name}
                                href={route.route}
                                onClick={() => setIsOpen(false)}
                                className={`rounded-xl w-full px-3 py-2 text-sm transition-colors duration-300 ${
                                    pathname === route.route ? "bg-blue-500 text-white" : "text-(--dark-blue)"
                                }`}
                            >
                                {route.name}
                            </Link>
                        ))}
                        <div className="flex w-full gap-2 mt-2">
                            <Link href="/login" className="w-1/2">
                                <button className="w-full px-2 py-2 text-xs text-gray-700 hover:text-gray-900 font-medium rounded-lg transition-colors duration-200">
                                    Login
                                </button>
                            </Link>
                            <Link href="/register" className="w-1/2">
                                <button className="w-full px-2 py-2 text-xs bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.nav>
    );
}
