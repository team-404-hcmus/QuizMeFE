import React, { useState } from 'react';
import "./QuizPlaying.css";
export interface answer {
	answerText:string,
	isCorrect:boolean
}
export interface Question{
            questionText: string,
            answerOptions: answer[]
}
export interface QuizPlayingProps{
	stateFunction:any
	question: Question[],
	[key:string]:unknown
}
function QuizPlaying(props:QuizPlayingProps) {
	const questions = props.question as Question[];

	const [curQuest, setcurQuest] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [result,setResult] = useState(0);
	const handleAnswerOptionClick = (isCorrect:boolean) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = curQuest + 1;
		if (nextQuestion < questions.length) {
			setcurQuest(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	function backHome(){
        props.stateFunction(null);
    };
	return (

		<div className='body'>
			
			<div className='app'>
				{showScore ?(				
					<div className='score-section'>	
						<b className='scoreDisplay'>Your scores : {(score/questions.length)*100}%</b>
						<button className='homebackBtn' onClick={backHome}>Back Home</button>							
					</div>
				) : (
					<div className="formContainer">
						
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {curQuest + 1}</span>/{questions.length}
							</div>
							<div className='questiontextContainer'>
								<label className='question-text'>{questions[curQuest].questionText}</label>
							</div>
						</div>
						<div className='answer-section'>				
							{questions[curQuest].answerOptions.map((answerOption) => (
								<button className='answersBtn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
		
	);
}
export{QuizPlaying}