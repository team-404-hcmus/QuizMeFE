import React, { useState } from 'react';
import "./QuizPlaying.css";
function QuizPlaying() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of France ?',
			answerOptions: [
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Bangkok', isCorrect: false },
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'HaNoi', isCorrect: true },
			],
		},
	];

	const [curQuest, setcurQuest] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
	return (
		<div className='body'>
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
				) : (
					<div className="formContainer">
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {curQuest + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[curQuest].questionText}</div>
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