"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface RegisterFormData {
    username: string;
    password: string;
    confirmPassword: string;
}

const Register: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<RegisterFormData>({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setShowModal(true);
            return;
        }

        const response = await axios.post("https://chickendunno-backend.onrender.com/api/auth/register", {
            username: formData.username,
            password: formData.password,
        });

        const data = (await response).data;

        router.push("/login");

        console.log("Registration data:", data);
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-40">
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 max-w-md w-full mx-4 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-red-600">Register Failed</h3>
                        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700">Password not match</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 sm:py-3 px-6 sm:px-10 rounded-xl transition-colors text-sm sm:text-base"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center bg-gray-300 px-4 sm:px-6">
                <div className="mb-6 sm:mb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                        Create an account <span className="text-red-900">ChickenDunno</span>
                    </h1>
                </div>
                <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 md:p-10 lg:p-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 text-center">Register</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full text-base sm:text-lg rounded-xl border border-gray-300 px-4 sm:px-6 py-3 sm:py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full text-base sm:text-lg rounded-xl border border-gray-300 px-4 sm:px-6 py-3 sm:py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full text-base sm:text-lg rounded-xl border border-gray-300 px-4 sm:px-6 py-3 sm:py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-base sm:text-xl font-bold rounded-xl py-3 sm:py-4 mt-4 transition-colors"
                        >
                            Register
                        </button>
                    </form>
                    <div className="text-center mt-4 sm:mt-6">
                        <span className="text-gray-500 text-sm sm:text-base md:text-lg">Already have an account?</span>
                        <button
                            onClick={() => router.push("/login")}
                            className="ml-2 text-yellow-600 hover:underline text-sm sm:text-base md:text-lg font-semibold"
                            type="button"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
