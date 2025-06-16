"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOrder } from "@/context/OrderContext";
import axios from "axios";
import OrderHistory from "./OrderHistory";
import { Orderr } from "@/data/Order/Order";
import { useRouter } from "next/navigation";

const Order: React.FC = () => {
    const router = useRouter();
    const { orderItems, updateQuantity, clearOrder } = useOrder();
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showLoginRequiredModal, setShowLoginRequiredModal] = useState(false);
    const [orders, setOrders] = useState<Orderr[]>([]);

    const calculateTotal = () => {
        return orderItems.reduce((total, item) => total + item.price * (item.quantity || 0), 0);
    };

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get(
                `https://chickendunno-backend.onrender.com/api/orders/user/${localStorage.getItem("userId")}`
            );
            setOrders(response.data);
        };
        fetchOrders();
    }, []);

    const handleCheckoutClick = () => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            setShowLoginRequiredModal(true);
            return;
        }
        setShowAddressModal(true);
    };

    const handleLoginRedirect = () => {
        setShowLoginRequiredModal(false);
        router.push("/login");
    };

    const handleAddressSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!address.trim()) {
            setAddressError("Please enter your address.");
            return;
        }
        setAddressError("");
        setShowAddressModal(false);

        console.log("Submitting order with address:", address, "userId:", localStorage.getItem("userId"));

        await axios.post("https://chickendunno-backend.onrender.com/api/orders/buy", {
            userId: Number(localStorage.getItem("userId")),
            address: address,
            order: orderItems.map((item) => ({
                foodId: item.id,
                quantity: item.quantity || 1,
            })),
        });

        clearOrder();
        setShowSuccessModal(true);
        console.log("Address submitted:", address);
    };

    return (
        <>
            {showLoginRequiredModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-40">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center relative">
                        <button
                            onClick={() => setShowLoginRequiredModal(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-yellow-600">Login Required</h3>
                        <p className="mb-6 text-gray-700">Please login to proceed with your order.</p>
                        <div className="space-y-3">
                            <button
                                onClick={handleLoginRedirect}
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors"
                            >
                                Go to Login
                            </button>
                            <button
                                onClick={() => setShowLoginRequiredModal(false)}
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showAddressModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-40">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center relative">
                        <button
                            onClick={() => setShowAddressModal(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Enter Delivery Address</h3>
                        <form onSubmit={handleAddressSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your address..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                            {addressError && <div className="text-red-600 text-sm mb-2">{addressError}</div>}
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg py-3 transition-colors"
                            >
                                Confirm Address
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-40">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center relative">
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-green-600">Order Successful!</h3>
                        <p className="mb-6 text-gray-700">
                            Thank you for your purchase. Your order is being processed.
                        </p>
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-xl transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="min-h-screen bg-gray-300 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">Your Order</h2>
                        </div>

                        <AnimatePresence>
                            {orderItems.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-8 text-center"
                                >
                                    <p className="text-gray-500">Your order is empty</p>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Add items from the menu to get started
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="divide-y divide-gray-200">
                                    {orderItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="p-6 flex items-center space-x-4"
                                            transition={{ duration: 0.25 }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">{item.vietnameseName}</p>
                                                <p className="text-yellow-500 font-medium">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-2 rounded-full hover:bg-gray-100"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-gray-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M20 12H4"
                                                        />
                                                    </svg>
                                                </button>
                                                <span className="text-lg font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-2 rounded-full hover:bg-gray-100"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-gray-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 4v16m8-8H4"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </AnimatePresence>

                        {orderItems.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-6 bg-gray-50 border-t border-gray-200"
                                transition={{ duration: 0.25 }}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-medium text-gray-900">Total</span>
                                    <span className="text-2xl font-bold text-yellow-500">
                                        ${calculateTotal().toFixed(2)}
                                    </span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                                    onClick={handleCheckoutClick}
                                    transition={{ duration: 0.25 }}
                                >
                                    Proceed to Checkout
                                </motion.button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
                <OrderHistory orders={orders} />
            </div>
        </>
    );
};

export default Order;
