import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);

    const checkAns = (e,ans) => {
        if (question.answer===ans) {
            e.target.classList.add("correct");            
        } else {
            e.target.classList.add("wrong");
        }
    }

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li onClick={(e)=>{checkAns}}>{question.option1}</li>
            <li onClick={(e)=>{checkAns}}>{question.option2}</li>
            <li onClick={(e)=>{checkAns}}>{question.option3}</li>
            <li onClick={(e)=>{checkAns}}>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz