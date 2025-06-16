"use client";
import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { menu } from "@/data/OurMenu/menu";
import { categories } from "@/data/OurMenu/categories";
import { motion } from "framer-motion";

const NewFood = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].label);

    const filteredMenu = menu.filter((item) => item.category === selectedCategory);

    return (
        <motion.section
            className="w-full py-12 flex flex-col items-center relative rounded-4xl bg-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
        >
            {/* Top Button */}
            <motion.button
                className="flex items-center gap-2 px-8 py-2 bg-orange-50 rounded-full shadow-md text-orange-800 font-semibold text-lg mb-12 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaUtensils className="text-xl" />
                New food
            </motion.button>

            {/* Main Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-15 text-center font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                Eat Fresh &amp; Healthy
            </motion.h2>

            {/* Category Bar */}
            <motion.div
                className="flex flex-wrap justify-between gap-8 bg-amber-100 rounded-full shadow-lg px-8 py-4 max-w-4xl w-[40%] mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
            >
                {categories.map((cat) => (
                    <motion.div
                        key={cat.label}
                        className={`flex items-center gap-2 text-xs md:text-xl font-semibold cursor-pointer transition ${
                            selectedCategory === cat.label ? "text-orange-500" : "text-gray-800"
                        }`}
                        onClick={() => setSelectedCategory(cat.label)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-2xl">{cat.emoji}</span>
                        {cat.label}
                    </motion.div>
                ))}
            </motion.div>

            {/* Menu Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-6xl">
                {filteredMenu.length > 0 ? (
                    filteredMenu.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="bg-orange-50 rounded-3xl shadow-xl flex flex-col items-center px-8 py-8 w-full md:w-1/3 relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg -mt-24 mb-4"
                                style={{ marginTop: "-5rem" }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-extrabold mb-2 font-serif text-center">
                                {item.title}
                            </h3>
                            <div className="text-xl font-bold text-gray-500">{item.price}</div>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-gray-500 text-xl">No items in this category.</div>
                )}
            </div>
        </motion.section>
    );
};

export default NewFood;
