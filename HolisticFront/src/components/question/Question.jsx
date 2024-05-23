import React, { useEffect, useState } from "react";
import "./question.css";
import { questionService } from '../../services/questionService';
import { CSSTransition } from 'react-transition-group';

function FormContact() {
    const [questionList, setQuestionList] = useState([]);
    const [expandedQuestions, setExpandedQuestions] = useState([]);
    const [rotatedQuestions, setRotatedQuestions] = useState([]);

    async function fetchQuestions() {
        try {
            const allQuestions = await questionService.getAllquestions();
            setQuestionList(allQuestions);
            setExpandedQuestions(new Array(allQuestions.length).fill(false));
            setRotatedQuestions(new Array(allQuestions.length).fill(false));
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const toggleQuestion = (index) => {
        setExpandedQuestions(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });

        setRotatedQuestions(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="questionsContainerWrapper">
        <div className="questionsContainer">
            <h2>Preguntas frecuentes</h2>
            {questionList.map((question, index) => (
                <div key={question.id_qa}>
                    <div className="questionWrapper">
                    <p 
  onClick={() => toggleQuestion(index)} 
  className="imgExpand"
>
  {question.question} 
  <img 
    src='src/assets/flechaAbajo.png' 
    alt="Expandir" 
    className={`arrow ${rotatedQuestions[index] ? 'rotated' : ''}`} 
  />
</p>

                        <CSSTransition
                            in={expandedQuestions[index]}
                            timeout={300}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className="answer">
                                <p>{question.answer}</p>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
    
}

export default FormContact;
