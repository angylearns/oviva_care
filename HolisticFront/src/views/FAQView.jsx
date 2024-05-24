import FormContact from "../components/formContact/FormContact";
import Question from "../components/question/Question";
import './fAQView.css';

function QuestionContact() {
    return (
        <>
            <div className="containerGroup">
                <div className="containerQuestion">
                    <Question />
                </div>
                <div className="containerForm">
                    <FormContact />
                </div>
            </div>

        </>
    );
}

export default QuestionContact;