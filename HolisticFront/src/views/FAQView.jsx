import FormContact from "../components/formContact/FormContact";
import Question from "../components/question/Question";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import './fAQView.css';

function FAQView() {
    return (
        <div className="main-container">
            <Navbar />
            <div className='frame'>
                <div className="containerGroup">
                    <div className="containerQuestion">
                        <Question />
                    </div>
                    <div className="containerForm">
                        <FormContact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQView;
