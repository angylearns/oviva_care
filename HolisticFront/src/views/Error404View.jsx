import Error404 from "../components/error404/Error404";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import React from "react";

function Error404View() {

    return (
        <React.Fragment>
            <Navbar />
            <Error404 />
            <Footer />
        </React.Fragment>
    )
}

export default Error404View;