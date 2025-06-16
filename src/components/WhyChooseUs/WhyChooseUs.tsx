"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        icon: "🌱",
        title: "ALWAYS FRESH",
        desc: "Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits",
        style: "left-[-5%] top-[-5%]",
    },
    {
        icon: "🌱",
        title: "100% NATURAL",
        desc: "Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits",
        style: "right-[-5%] top-[-5%]",
    },
    {
        icon: "❤️",
        title: "SUPER HEALTHY",
        desc: "Fresh food is food which has not been preserved and has not spoiled yet.",
        style: "left-[-5%] top-[45%]",
    },
    {
        icon: "🏅",
        title: "PREMIUM QUALITY",
        desc: "Fresh food is food which has not been preserved and has not spoiled yet.",
        style: "right-[-5%] top-[45%]",
    },
];

const WhyChooseUs = () => {
    return (
        <motion.div
            className="w-full bg-gray-300 py-16 flex flex-col items-center relative rounded-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center font-serif z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Why Choose Us
            </motion.h2>
            <div className="relative w-full max-w-5xl flex flex-col items-center min-h-[600px]">
                {/* Central Spices Image */}
                <motion.img
                    src="why.png"
                    alt="Spices"
                    className="absolute z-10 mx-auto w-[500px] max-w-full top-[10%]"
                    style={{ maxHeight: 400 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Features - absolutely positioned around the image */}
                {features.map((f, index) => (
                    <motion.div
                        key={f.title}
                        className={`absolute ${f.style} w-54 md:w-72 bg-white/95 rounded-3xl shadow-2xl flex flex-col items-center text-center px-6 py-6 z-20 border-2 border-gray-100`}
                        initial={{ opacity: 0, scale: 0.8, x: f.style.includes("left") ? -50 : 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <motion.span
                            className="text-4xl mb-3"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {f.icon}
                        </motion.span>
                        <motion.div
                            className="font-extrabold text-lg md:text-2xl text-gray-900 mb-2 font-serif tracking-wide"
                            whileHover={{ scale: 1.05 }}
                        >
                            {f.title}
                        </motion.div>
                        <div className="text-gray-600 text-sm md:text-base">{f.desc}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WhyChooseUs;
