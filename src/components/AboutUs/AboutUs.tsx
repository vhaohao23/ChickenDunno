"use client";
import React from "react";
import { motion } from "framer-motion";
import { members } from "@/data/Member/Member";

const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            {/* Hero Section with Background Image */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70 rounded-2xl w-full z-1 rounded-4xl"></div>

                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl"
                    style={{
                        backgroundImage:
                            'url("https://homefoodi.com/wp-content/uploads/2023/03/top-view-table-full-food.jpg")',
                        filter: "brightness(0.7)",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center z-2"
                >
                    <div className="text-center px-4 py-12 sm:py-16 md:py-20">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
                        >
                            About <span className="text-yellow-400">Chicken Dunno</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.25, delay: 0.4 }}
                            className="mt-3 max-w-md mx-auto text-sm sm:text-base md:text-xl lg:text-2xl text-white"
                        >
                            Serving delicious food with love since 2024
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Rest of the content */}
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 md:mt-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
                        >
                            <img
                                src="https://asianinspirations.com.au/wp-content/uploads/2021/11/9-Secret-Ingredients-to-Cook-Authentic-Vietnamese-Food_Feat.jpg"
                                alt="Our Restaurant"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="px-4 sm:px-0"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                At Chicken Dunno, we believe in serving the most delicious and authentic food
                                that brings people together. Our journey began with a simple passion for
                                creating memorable dining experiences through exceptional food and service.
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                                Every dish we serve is crafted with care, using the finest ingredients and
                                traditional recipes that have been perfected over time.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-lg shadow-xl p-6 sm:p-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                                title: "Quality Food",
                                description:
                                    "Using only the freshest ingredients to create exceptional dishes",
                            },
                            {
                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                title: "Great Service",
                                description: "Providing warm and welcoming service to all our guests",
                            },
                            {
                                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                                title: "Community",
                                description: "Building lasting relationships with our community",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-4 sm:p-6"
                            >
                                <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d={item.icon}
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 md:mt-20"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                        {members.map((member) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25, delay: member.id * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full mx-auto"
                            >
                                <img
                                    src={member.imgLink}
                                    alt="Team Member"
                                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md mt-7 mb-4 object-cover"
                                />
                                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-center">{member.name}</h3>
                                <p className="text-green-600 font-semibold mb-2 text-center text-sm sm:text-base">{member.role}</p>
                                <p className="text-gray-500 text-center mb-4 text-xs sm:text-sm">{member.task}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
