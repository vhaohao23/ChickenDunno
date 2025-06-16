import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import { NavBar } from "@/components/NavBar/NavBar";
import React from "react";

function page() {
    return (
        <>
            <NavBar />
            <div className="mx-8 my-2">
                <Menu />
            </div>
            <Footer />
        </>
    );
}

export default page;
