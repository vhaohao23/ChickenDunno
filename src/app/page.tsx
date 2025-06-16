import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { NavBar } from "@/components/NavBar/NavBar";
import NewFood from "@/components/NewFood";
import OutstandingFood from "@/components/OutstandingFood/OutstandingFood";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
    return (
        <>
            <NavBar />

            <div className="mx-2 sm:mx-4 md:mx-8 my-2 sm:my-4 md:my-6">
                <div className="space-y-6 sm:space-y-8 md:space-y-12">
                    <Hero />
                    <NewFood />
                    <OutstandingFood />
                    <WhyChooseUs />
                </div>
            </div>
            {/* <AIchat /> */}
            <Footer />
        </>
    );
}
