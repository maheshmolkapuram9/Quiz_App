import { useRef, useState } from "react";
import QuestionsData from "./QuestionsData";
import Score from "./Score";

const Quiz = () => {
    const [indexOfQuestion, setIndex] = useState(0);
    const Question = QuestionsData[indexOfQuestion];
    const [blockQuestion, setBlock] = useState(false);
    const [score, setScore] = useState(0);

    const option1Ref = useRef(null);
    const option2Ref = useRef(null);
    const option3Ref = useRef(null);
    const option4Ref = useRef(null);
    const optionsArray = [option1Ref,option2Ref,option3Ref,option4Ref];

    const handleNext = () =>{
        if (blockQuestion){
            if (indexOfQuestion === QuestionsData.length){
                setIndex(0)
            } else {
                setIndex(indexOfQuestion+1)
            }
            setBlock(false)
            optionsArray.map(optionRefs => {
                optionRefs.current.classList.remove("correct","wrong")
            })
        } else {
            alert("choose an option to move to the next question")
        }
    }

    const handleClick = (e, ans) =>{
        if (!blockQuestion){
            if (ans === Question.answer){
                e.target.classList.add("correct")
                setScore(score+1)
            } else {
                e.target.classList.add("wrong")
                optionsArray[Question.answer-1].current.classList.add("correct")
            }
            console.log("comingInside")
            setBlock(true)
        }
    }

    const handleRestart = () =>{
        setIndex(0);
        setBlock(false);
        setScore(0);
    }

    return ( 
        <div className="container">
            <h1>Quiz-App</h1>
            {indexOfQuestion === QuestionsData.length?
            <Score score={score} totalScore={QuestionsData.length} handleRestart={handleRestart}/>:
            (<>
                <h3 className="question">
                Q{indexOfQuestion+1}. {Question.question}
                </h3>
                <p className="options" ref={option1Ref} onClick={(e)=>handleClick(e,1)}>
                    A. {Question.option1}
                </p>
                <p className="options" ref={option2Ref} onClick={(e)=>handleClick(e,2)}>
                    B. {Question.option2}
                </p>
                <p className="options" ref={option3Ref} onClick={(e)=>handleClick(e,3)}>
                    C. {Question.option3}
                </p>
                <p className="options" ref={option4Ref} onClick={(e)=>handleClick(e,4)}>
                    D. {Question.option4}
                </p>
                <button onClick={handleNext}>
                    Next
                </button>
                <p className="question_number">
                    {indexOfQuestion+1} of {QuestionsData.length} questions
                </p>
            </>
            )}
        </div>
     );
}
 
export default Quiz;