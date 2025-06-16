"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaRegCommentDots } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="w-full min-h-[calc(100vh-130px)] bg-gradient-to-r from-orange-200 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 rounded-4xl relative">
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-black/80 rounded-2xl z-1"></div>

            {/* Background image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 rounded-4xl">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="adsvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Foreground content */}
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">
                {/* Left Side: Text and Buttons */}
                <motion.div
                    className="z-10 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {`It's not just food, `} <br />
                        <span className="text-yellow-500">{`it's an experience!`}</span>
                    </motion.h1>
                    <motion.p
                        className="text-gray-100 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-lg text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {`Good food is more than a meal — it's a moment shared, a story told, and a memory made.
                        In every bite, we serve not just flavors, but the joy of being together and the
                        comfort of feeling at home.`}
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 shadow-lg rounded-4xl font-semibold text-base sm:text-lg text-gray-900 hover:bg-white hover:text-orange-400 transition">
                            <FaUtensils className="text-indigo-800 text-xl sm:text-2xl" />
                            Menu
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 shadow-lg rounded-4xl font-semibold text-base sm:text-lg text-gray-900 hover:bg-white hover:text-orange-400 transition">
                            <FaRegCommentDots className="text-indigo-800 text-xl sm:text-2xl" />
                            About Us
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side: Main Image and Floating Badges */}
                <motion.div
                    className="z-10 relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Blurred background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl w-full h-full z-0"></div>

                    {/* Main Pizza Image */}
                    <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full shadow-2xl overflow-visible z-10 flex items-center justify-center">
                        <img
                            src="https://cdn.tgdd.vn/2021/07/CookProduct/BeFunky-collage-1200x676-5.jpg"
                            alt="Pizza Hero"
                            className="w-full h-full object-cover rounded-full border-4 sm:border-8 border-white"
                        />
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, repeatType: "loop" }}
                            className="absolute right-[-10%] sm:right-[-20%] top-4 sm:top-10 bg-white rounded-xl shadow-lg flex items-center gap-2 px-3 sm:px-4 py-2 min-w-[140px] sm:min-w-[180px] z-12"
                        >
                            <span className="text-xl sm:text-2xl">😊</span>
                            <div>
                                <div className="font-semibold text-xs sm:text-sm">Our Happy Customer</div>
                                <div className="text-yellow-500 text-xs flex items-center gap-1">
                                    ⭐ 4.9 <span className="text-gray-400">(1,989 Reviews)</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, repeatType: "loop" }}
                            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white rounded-xl shadow-lg flex items-center gap-2 px-3 sm:px-4 py-2 z-12"
                        >
                            <span className="text-xl sm:text-2xl">😍</span>
                            <span className="font-semibold text-xs sm:text-sm">Om-nom-nom....</span>
                        </motion.div>

                        <motion.div
                            className="absolute left-[-10%] sm:left-[-20%] top-1/2 bg-white rounded-xl shadow-lg flex items-center gap-2 px-3 sm:px-4 py-2 min-w-[120px] sm:min-w-[150px] z-12"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, repeatType: "loop" }}
                        >
                            <div className="h-8 sm:h-12 rounded-lg overflow-hidden">
                                <img
                                    src="https://tunaucom123.com.vn/wp-content/uploads/2023/03/com-ca-ri-thit-heo-chien-xu.jpg"
                                    alt="Italian Pizza"
                                    className="object-cover h-full"
                                />
                            </div>
                            <div>
                                <div className="font-semibold text-xs sm:text-sm">Cơm gà quận 1</div>
                                <div className="text-yellow-500 text-xs">⭐⭐⭐⭐⭐</div>
                                <div className="text-gray-500 text-xs">$200.00</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Badges and Food Images */}
                    <div className="absolute left-4 sm:left-10 bottom-10 sm:bottom-20 w-20 h-20 sm:w-30 sm:h-30 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg z-12">
                        <div className="relative w-full h-full">
                            <img
                                src="/fishSauce.png"
                                alt="Fish Sauce"
                                className="absolute inset-0 w-full h-full object-cover rounded-full border-white"
                            />
                        </div>
                    </div>
                    <div className="absolute right-4 sm:right-10 bottom-10 sm:bottom-20 w-20 h-20 sm:w-30 sm:h-30 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg z-12">
                        <div className="relative w-full h-full">
                            <img
                                src="https://giochatuyet.com/uploads/source/danh-muc/danh-muc-do-chua.jpg"
                                alt="Pickled Food"
                                className="absolute inset-0 w-full h-full object-cover rounded-full border-white"
                            />
                        </div>
                    </div>
                    <div className="absolute left-4 sm:left-10 top-10 sm:top-20 w-20 h-20 sm:w-30 sm:h-30 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg z-12">
                        <div className="relative w-full h-full">
                            <img
                                src="/soySauce.jpg"
                                alt="Soy Sauce"
                                className="absolute inset-0 w-full h-full object-cover rounded-full border-white"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
