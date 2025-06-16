import Footer from "@/components/Footer/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import Order from "@/components/Order/Order";
import React from "react";

function page() {
    return (
        <>
            <NavBar />
            <div className="mx-8 my-2">
                <Order />
            </div>
            <Footer />
        </>
    );
}
export default page;
