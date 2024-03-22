const Score = ({score,totalScore,handleRestart}) => {
    return ( 
            <div className="score_container">
                <h3>Your Score is {score}/{totalScore}</h3>
                <p>
                    Click here to restart again 
                    <button onClick={handleRestart}>Restart</button>
                </p>
            </div>
     );
}
 
export default Score;