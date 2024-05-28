
import Navbar from "../components/navbar/Navbar";
import QaAdmin from "../components/qaadmin/QaAdmin";
import Footer from "../components/footer/Footer";


function AdminFAQView() {
    return (
        <>
            <div className="main-container">
                <Navbar />
                <div className="content">
                <QaAdmin />
                </div>
                <Footer />


            </div>
        </>
    );
}

export default AdminFAQView;