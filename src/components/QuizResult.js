export default function QuizResult({length, score, handleReset}){
    return (
        <>
        <h2>Quiz Result</h2>
        <p>You scored {score} of {length} </p>
        <button onClick={() => handleReset()}> TRY AGAIN</button>
        </>
    )
}