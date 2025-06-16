import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import React from "react";

function page() {
    return (
        <>
            <NavBar />

            <div className="mx-8 my-2">
                <AboutUs />
            </div>
            <Footer />
        </>
    );
}

export default page;
