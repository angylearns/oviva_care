
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Symptoms from "../components/symptoms/Symptoms";
import TestQuestion from "../components/testQuestion/TestQuestion";
import Pretest from "../components/pretest/Pretest";
import Footer from "../components/footer/Footer";


function HomeView() {
    return (
        <>

            <Navbar />
            <Hero />
            <TestQuestion />
            <Pretest />
            <Symptoms />
            <Footer />


        </>
    );
}

export default HomeView;