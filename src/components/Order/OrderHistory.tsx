import React from "react";
import {  OrderHistoryProps } from "@/data/Order/Order";

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => (
    <div className="max-w-2xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Order History</h2>
        <div className="space-y-6">
            {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow p-6">
                    <div className="mb-2 text-lg font-semibold text-gray-800">
                        Address: <span className="font-normal">{order.address}</span>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {order.orderDetails.map((detail) => (
                            <div key={detail.id} className="py-3 flex justify-between items-center">
                                <div>
                                    <div className="font-medium text-gray-900">{detail.food.name}</div>
                                    <div className="text-sm text-gray-500 italic">
                                        {detail.food.vietnameseName}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-700">x{detail.quantity}</span>
                                    <span className="text-yellow-500 font-semibold">
                                        ${detail.food.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default OrderHistory;
