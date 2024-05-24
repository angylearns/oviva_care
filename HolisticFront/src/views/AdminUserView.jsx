
import Navbar from "../components/navbar/Navbar";
import AdminPerson from "../components/adminPerson/AdminPerson";
import Footer from "../components/footer/Footer";


function AdminUserView() {
    return (
        <>

            <div className="main-container">
                <Navbar />
                <AdminPerson />
                <Footer />
            </div>

        </>
    );
}

export default AdminUserView;