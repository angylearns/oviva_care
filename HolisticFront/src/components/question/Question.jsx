import React from "react";
import { useEffect, useState } from "react";
import "./question.css";
import { questionService } from '../../services/questionService'

function Question() {

    const[questionList, setQuestionList]=useState([]);

    async function fetchQuestions() {
        try {
            const allQuestions = await questionService.getAllquestions();

            setQuestionList(allQuestions);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <>
         <div>
            {questionList.map(question => (
                <div key={question.id_qa}>
                    <h2>{question.question}</h2>
                    <p>{question.answer}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default Question;
