

export default function QuizCard({data, length, questionId, handleQuestion}){

    return (
        <>
        <h3>
            Quiz {questionId+1}/{length}
        </h3>
        <div>
            <h3>{data[questionId].question}</h3>
            <ul>
                {data[questionId].options.map( (element) => {
                    return <li key={element.id}><button 
                    onClick={() => handleQuestion(element.isCorrect)}> {element.answer} </button></li>
                })}
            </ul>
        </div>
        </>
    )
}