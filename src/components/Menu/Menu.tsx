"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/data/Menu/MenuItem";
import { useOrder } from "@/context/OrderContext";
import { FaSearch } from "react-icons/fa";

const categories = ["All", "Main Courses", "Appetizers", "Banh Mi", "Rice Dishes", "Desserts"];

const Menu: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const { menuQuantities, addToOrder } = useOrder();

    const filteredItems = menuItems.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = searchQuery === "" || 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.vietnameseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-300 pb-8 sm:pb-12">
            {/* Hero Section */}
            <div className="relative mb-8 sm:mb-12">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70 rounded-2xl z-1"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3")',
                        filter: "brightness(0.7)",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] flex items-center justify-center z-2"
                >
                    <div className="text-center px-4 py-12 sm:py-16 md:py-20">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
                        >
                            Our <span className="text-yellow-400">Menu</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.25, delay: 0.4 }}
                            className="mt-3 max-w-md mx-auto text-sm sm:text-base md:text-xl lg:text-2xl text-white"
                        >
                            Authentic Vietnamese Cuisine
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Menu Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mb-8 sm:mb-12"
                >
                    <div className="relative max-w-md mx-auto border-2 rounded-3xl border-gray-400">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search menu items..."
                            className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-yellow-400 transition-colors text-gray-700"
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                                ${
                                    selectedCategory === category
                                        ? "bg-yellow-400 text-gray-900"
                                        : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Menu Items Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory + searchQuery}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <motion.div
                                    className="relative h-40 sm:h-48"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {menuQuantities[item.id] > 0 && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-400 text-gray-900 font-bold px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base"
                                        >
                                            {menuQuantities[item.id]}
                                        </motion.div>
                                    )}
                                </motion.div>
                                <div className="p-4 sm:p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-500 italic">
                                                {item.vietnameseName}
                                            </p>
                                        </div>
                                        <span className="text-base sm:text-lg font-bold text-yellow-500">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4">{item.description}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => addToOrder(item)}
                                        className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <span>Add to Order</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* No Results Message */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-600 text-lg">
                            No items found matching your search criteria.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Menu;
