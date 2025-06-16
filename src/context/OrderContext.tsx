"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { MenuItem } from "@/data/Menu/MenuItem";

interface OrderContextType {
    orderItems: MenuItem[];
    menuQuantities: { [key: number]: number };
    addToOrder: (item: MenuItem) => void;
    updateQuantity: (id: number, change: number) => void;
    totalItems: number;
    clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orderItems, setOrderItems] = useState<MenuItem[]>([]);
    const [menuQuantities, setMenuQuantities] = useState<{ [key: number]: number }>({});

    const addToOrder = (item: MenuItem) => {
        // Update menu quantities
        setMenuQuantities((prev) => ({
            ...prev,
            [item.id]: (prev[item.id] || 0) + 1,
        }));

        // Update order items
        setOrderItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id: number, change: number) => {
        setOrderItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(0, (item.quantity || 0) + change) } : item
                )
                .filter((item) => (item.quantity || 0) > 0)
        );

        setMenuQuantities((prev) => {
            const newQuantity = Math.max(0, (prev[id] || 0) + change);
            if (newQuantity === 0) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: newQuantity };
        });
    };

    const totalItems = orderItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

    const clearOrder = () => {
        setOrderItems([]);
        setMenuQuantities({});
    };

    return (
        <OrderContext.Provider
            value={{
                orderItems,
                menuQuantities,
                addToOrder,
                updateQuantity,
                totalItems,
                clearOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
};
