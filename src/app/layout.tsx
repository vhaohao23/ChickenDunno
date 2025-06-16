import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chicken Dunno",
    description: "Vietnamese Chicken Restaurant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-300`}>
                <OrderProvider>{children}</OrderProvider>
            </body>
        </html>
    );
}
