import { useState } from "react"
import QuizCard from "./QuizCard"
import QuizResult from "./QuizResult"
import {data} from "../data/data"

export default function Quiz(){
    const length = data.length
    const [questionId, setQuestionId] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const handleReset = () => {
        setShowScore(false)
        setScore(0)
        setQuestionId(0)
    }

    const handleQuestion = (isCorrect) => {
        if (isCorrect === true) setScore(score + 1)

        const newQuestionId = questionId + 1
        (newQuestionId < length)
            ?(setQuestionId(newQuestionId))
            :(setShowScore(true))
    }

    return (
        <>
        <h1>QUIZ</h1>
        {showScore
            ?(< QuizCard 
                length={length}
                score={score}
                handleReset={handleReset} />
            )
            :(< QuizCard
                data={data}
                length={length}
                questionId={questionId}
                handleQuestion={handleQuestion} />
            )
        }
        </>
    )
}

// {showScore
//     ? (< QuizResult 
//         length = {length}
//         score = {score}
//         handleReset = {handleReset}/>)

//     : (< QuizCard
//         data={data}
//         length={length}
//         questionId={questionId}
//         handleQuestion={handleQuestion} />)
// }