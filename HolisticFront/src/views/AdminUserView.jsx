
import Navbar from "../components/navbar/Navbar";
import AdminPerson from "../components/adminPerson/AdminPerson";
import Footer from "../components/footer/Footer";
import "../views/adminUserView.css"


function AdminUserView() {
    return (
        <div className="main-container">
            <Navbar />
            <div className="content">
                <AdminPerson />
            </div>
            <Footer />
        </div>
    );
}

export default AdminUserView;