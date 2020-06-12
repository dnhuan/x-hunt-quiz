import React from 'react';
// remove dis after
import quizIMG from '../assets/quiz1.png';

const Quiz = ({quizID}) => {
    return(
        <div className="quiz">
            <img src={quizIMG} alt="quiz" />
            
        </div>
    )
}

export default Quiz;