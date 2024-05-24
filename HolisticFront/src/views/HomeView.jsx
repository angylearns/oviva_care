
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Symptoms from "../components/symptoms/Symptoms";
import TestQuestion from "../components/testQuestion/TestQuestion";
import Pretest from "../components/pretest/Pretest";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";

function getCookieValue(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function HomeView() {
    const [isLoged, setIsLoged] = useState(false);
    useEffect(() => {

        const userType = getCookieValue('user_type');

        if (userType != null){
            setIsLoged(true);
        }
}, []);
return (
    <>

        <Navbar />
        <Hero />
        {isLoged ? <TestQuestion /> : <Pretest />}
        <Symptoms />
        <Footer />


    </>
);
}

export default HomeView;