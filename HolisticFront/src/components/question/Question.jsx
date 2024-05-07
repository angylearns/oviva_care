import React, { useEffect, useState } from "react";
import "./question.css";
import { questionService } from '../../services/questionService'

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
        <div className="questionsContainer">
            {questionList.map((question, index) => (
                <div key={question.id_qa}>
                    <p onClick={() => toggleQuestion(index)}>
                        {question.question} 
                        <img src="https://i.postimg.cc/7hKhM85r/abajo.png" alt="Expandir" style={{ transform: rotatedQuestions[index] ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </p>
                    {expandedQuestions[index] && 
                        <div className="answer">
                            <p>{question.answer}</p>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default FormContact;
