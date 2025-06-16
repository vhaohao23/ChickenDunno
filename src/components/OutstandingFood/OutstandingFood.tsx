"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { foods } from "@/data/OutstandingFood/foods"; // Assuming you have a JSON file with food data
import { motion, AnimatePresence } from "framer-motion";

const OutstandingFood = () => {
    const [centerIdx, setCenterIdx] = useState(2); // Start with the middle food

    // Helper to get the foods to display (2 left, center, 2 right)
    const getDisplayFoods = () => {
        const len = foods.length;
        // Circular array logic
        return [
            foods[(centerIdx - 2 + len) % len],
            foods[(centerIdx - 1 + len) % len],
            foods[centerIdx],
            foods[(centerIdx + 1) % len],
            foods[(centerIdx + 2) % len],
        ];
    };

    const handlePrev = () => {
        setCenterIdx((prev) => (prev - 1 + foods.length) % foods.length);
    };

    const handleNext = () => {
        setCenterIdx((prev) => (prev + 1) % foods.length);
    };

    const displayFoods = getDisplayFoods();

    return (
        <motion.section
            className="rounded-4xl relative w-full h-170 bg-gray-300 py-16 flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Curved Blue Background */}
            <motion.div
                className="absolute left-0 right-0 bottom-0 h-1/2 pointer-events-none z-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
            >
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        fill="#CC9900"
                        fillOpacity="1"
                        d="M0,224L80,202.7C160,181,320,139,480,154.7C640,171,800,245,960,261.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </motion.div>

            {/* Food Images Row */}
            <div className="relative z-10 flex items-end justify-center gap-4 md:gap-8 mb-8 w-full max-w-5xl">
                <AnimatePresence mode="wait">
                    {displayFoods.map((food, idx) => (
                        <motion.div
                            key={food.alt}
                            className={`flex-shrink-0 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden flex items-center justify-center transition-all duration-300
                                ${
                                    idx === 2
                                        ? "w-64 h-64 md:w-80 md:h-80 z-20"
                                        : "w-32 h-32 md:w-40 md:h-40 z-10"
                                }
                            `}
                            style={{ marginTop: idx === 2 ? 0 : "3rem" }}
                            initial={{ opacity: 0, scale: 0.8, x: idx === 2 ? 0 : idx < 2 ? -50 : 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: idx === 2 ? 0 : idx < 2 ? 50 : -50 }}
                            transition={{ duration: 0.2 }}
                            whileHover={{ scale: idx === 2 ? 1.05 : 1.1 }}
                        >
                            <motion.img
                                src={food.image}
                                alt={food.alt}
                                className="object-cover w-full h-full"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Quote and Navigation */}
            <motion.div
                className="absolute bottom-10 z-20 flex items-center justify-center gap-8 w-full max-w-2xl mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                <motion.button
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-4 text-2xl text-gray-700 shadow-md transition"
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaChevronLeft />
                </motion.button>
                <motion.div
                    className="flex-1 bg-white/80 rounded-3xl px-8 py-6 text-center shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 tracking-wide"
                        style={{ letterSpacing: "0.05em" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        Taste it!
                        <br />
                        Feel it!
                        <br />
                        Love it!
                    </motion.div>
                    <motion.div
                        className="text-gray-600 text-lg md:text-xl font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        Food is symbolic of love when words are inadequate
                    </motion.div>
                </motion.div>
                <motion.button
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-4 text-2xl text-gray-700 shadow-md transition"
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaChevronRight />
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

export default OutstandingFood;
