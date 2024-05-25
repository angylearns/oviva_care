
import Navbar from "../components/navbar/Navbar";
import WhoIAm from "../components/whoIAm/WhoIAm";
import Footer from "../components/footer/Footer";


function WhoIAmView() {
    return (
        <>
            <div className="main-container">
                <Navbar />
                <WhoIAm />
                <Footer />

            </div>
        </>
    );
}

export default WhoIAmView;