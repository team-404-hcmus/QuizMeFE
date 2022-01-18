import { currentIP,userData } from "Hooks/ContextProvider";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./form.css";
import { Question,answer} from "Pages/QuizPlaying";
function ProfileForm(props:any) {
	const[changePass, setchangePass] = useState(false);
	// const account = 
	// 	{
	// 		schoolID:"19127614",
	// 		fullname:"Nguyen Anh Tuan",
	// 		dob:"25/12/2001",
	// 		gender:"Male"
	// 	}
	function clickChangePass(){
		setchangePass( function(e){
			return !e;
		})
	}
	return(	
		<form className='profileForm'>								
			<div>
				{changePass?<ChangePassForm></ChangePassForm>:null}														
				<div className='labelContainer'>
					<label className='label'><b>Profile</b></label>
				</div>
				
				<div className='container'>
					<label htmlFor='idDisplay' className='labelDisplay'><b>School ID</b></label>
					<input className='displayField' name='idDisplay'
					placeholder={userData.username}
					></input>	

					<label htmlFor='nameDisplay' className='labelDisplay'><b>Full Name</b></label>
					<input className='displayField' name='nameDisplay'
					placeholder={userData.fullname}
					></input>

					<label htmlFor='DoBDisplay' className='labelDisplay' ><b>DoB</b></label>				
					<input className='displayField' name='DoBDisplay'
					placeholder={userData.dob}></input>		

					<label htmlFor='genderDisplay' className='labelDisplay'><b>Gender</b></label>		
					<input className='displayField' name='genderDisplay'
					placeholder={userData.gender}></input>	
				</div>
				
				<div className='container'>
					<div className='centerBtn'>
						<button className='landingBtn' type="button" onClick={clickChangePass}>Change Password</button>
					</div>	
				</div>					
			</div>
		</form>
	)
}
function ChangePassForm(props:any){
	const[oldPwd, setOldPwd] = useState("");
	const[newPwd, setNewPwd] = useState("");
	const[confirmPwd, setConfirmPwd] = useState("");
	function handleOldPwdChange(event:any){
        event.preventDefault();
        setOldPwd(event.target.value)
    }
	function handleNewPwdChange(event:any){
        event.preventDefault();
        setNewPwd(event.target.value)
    }
	function handleConfirmPwdChange(event:any){
        event.preventDefault();
        setConfirmPwd(event.target.value)
    }
	async function changePasswordBtnClick(){
		if(confirmPwd!==newPwd)
		{
			alert("Wrong Confirm Password")
			return;
		}
		if(confirmPwd=="" || newPwd=="" || oldPwd=="")
		{
			alert("Please fulfill the information")
			return;
		}
		const response = await fetch(`http://${currentIP}:8080/api/changePassword`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		'Content-Type': 'application/json'
		},
				body: JSON.stringify({"key":userData.loginKey,"pwd":oldPwd,"newPwd":newPwd}) // body data type must match "Content-Type" header
			});
		if(response.status !== 200){
			alert("Change Password Unsuccesful");
		}
		else{
			alert("Change Password Succesful");
		}
	}
	return(
		<form className='changepassForm'>
			<div>
				<div className='labelContainer'>
					<label className="label"><b>CHANGE</b></label>
				</div>
				<div className='labelContainer'>
					<label className="label"><b>PASSWORD</b></label>
				</div>
				<div className='container'>
					<label htmlFor="oldPass"><b>Old Password</b></label>
					<input type="text" placeholder="Enter Your Old Password" name="oldPass" required
					onChange={handleOldPwdChange}></input>
					<label htmlFor="newPass"><b>New Password</b></label>
					<input type="text" placeholder="Enter Your New Password" name="newPass" required
					onChange={handleNewPwdChange}></input>
					<label htmlFor="confirmPass"><b>Confirm</b></label>
					<input type="text" placeholder="Confirm Your New Password" name="confirmPass" required
					onChange={handleConfirmPwdChange}></input>		
				</div>
				<div className='container'>
					<div className='centerBtn'>
						<button className='landingBtn' type="button" onClick={changePasswordBtnClick}>Submit</button>
					</div>	
				</div>	
			</div>
		</form>
	)
}

function JoinRoomForm(props:any){
	function JoinRoomBtnClick(){
		alert("room does not exist")
	}
	return(
		<form>
			<div className='container'>
				<div className='JRlabelContainer'>
					<label className='JRlabel'><b>ROOM PIN</b></label>
				</div>				
				<div className='container'>
					<input type="text" placeholder="Enter Room ID" className='roomPin' required></input>							
				</div>
				<div className='container'>
					<div className='joinBtn'>
						<button className='landingBtn' type="submit" onClick={JoinRoomBtnClick}>Join</button>
					</div>	
				</div>	
			</div>
		</form>
	)
}
interface NewQuiz{
	name:any
	questions: Question[],
}
function AddQuizForm(props:any){ 
	const[addStage, setAddStage] = useState(0);
	// Tên Quiz
	const[quizName, setQuizName] = useState("");
	//Câu hỏi
	const[questionText, setQuestionText] = useState(""); 
	//Câu trả lời + Đúng sai
	//1
	const[ans1, setAns1] = useState("");
	const[iscorrect1, setIsCorrect1] = useState(true);
	//2
	const[ans2, setAns2] = useState("");
	const[iscorrect2, setIsCorrect2] = useState(true);
	//3
	const[ans3, setAns3] = useState("");
	const[iscorrect3, setIsCorrect3] = useState(true);
	//4
	const[ans4, setAns4] = useState("");
	const[iscorrect4, setIsCorrect4] = useState(true);
	//Bộ câu hỏi
	const [questionList, setQuestionList]=useState([]as Question[])
	//
	const[numberQuestion, setNumberQuestion] = useState(0);// số câu hỏi
	const[quiz, setQuiz] = useState<NewQuiz>();
	function SetQuizNameClick(){
		setAddStage(1)
	}
	function AddQuestionClick(){
		let answerlist:answer[]=[
			{answerText:ans1,isCorrect:iscorrect1},
			{answerText:ans2,isCorrect:iscorrect2},
			{answerText:ans3,isCorrect:iscorrect3},
			{answerText:ans4,isCorrect:iscorrect4}
		]
		let question:Question={
			questionText:questionText,
			answerOptions:answerlist
		}
		setQuestionList([...questionList,question])
		setAns1("");setIsCorrect1(false);
		setAns2("");setIsCorrect2(false);
		setAns3("");setIsCorrect3(false);
		setAns4("");setIsCorrect4(false);
		setNumberQuestion(numberQuestion+1)
	}
	async function DoneClick(){
		var today = new Date();
		var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
		let newquiz:NewQuiz={
			name:quizName,
			questions: questionList,
		}
		console.log(newquiz)
		return;
		const response = await fetch(`http://${currentIP}:8080/api/AddQuestion`, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
			},
					body: JSON.stringify({Question:newquiz,"key":userData.loginKey}) 
					// body data type must match "Content-Type" header
			});
			if(response.status === 200)
			{
				setAddStage(2)
			}
	}
	function convertToBool(option:string)
	{
		console.log(option)
		if(option==="true"){
			return true
		}
		return false
	}
	if(addStage===0)
	{
		return(
			<form>
				<div className='labelContainer'>
						<label className="label"><b>ADD QUIZ</b></label>
				</div>	
				<div className='container'>
					<input type="text" placeholder="Enter Quiz Name" className='roomPin' required
					onChange={event => setQuizName(event.target.value)}></input>							
				</div>
				<div className='container'>
					<div className='addQuizBtn'>
						<button className='landingBtn' type="button" onClick={SetQuizNameClick}>Next</button>
					</div>	
				</div>	
			</form>
		)
	}
	else if(addStage===1){
		return(
			<form className="AddQuizForm">
				<div className='labelContainer'>
						<label className="label"><b>{quizName}</b></label>
				</div>					
					
				<div className='container'>
					<p className="questCount">QUESTION NUMBER: {numberQuestion}</p>	
					<input type="text" required id="questionName" onChange={event=>setQuestionText(event.target.value)} 
					placeholder="Input Question"/>
					<input type="text" required id="ans1" placeholder="Answer 1" onChange={event => setAns1(event.target.value)}/>
					<select id="isCorrect1" onChange={event => setIsCorrect1(convertToBool(event.target.value))}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<input type="text" required id="ans2" placeholder="Answer 2"onChange={event => setAns2(event.target.value)}/>
					<select id="isCorrect2" onChange={event => setIsCorrect2(convertToBool(event.target.value))}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<input type="text" required id="ans3" placeholder="Answer 3"onChange={event => setAns3(event.target.value)}/>
					<select id="isCorrect3"onChange={event => setIsCorrect3(convertToBool(event.target.value))}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<input type="text" required id="ans4" placeholder="Answer 4"onChange={event => setAns4(event.target.value)}/>
					<select id="isCorrect4"onChange={event => setIsCorrect4(convertToBool(event.target.value))}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<div className='addQuestionBtn'>
						<button className='quizFormBtn' type="button" onClick={AddQuestionClick} >Add</button>	
						<button className='quizFormBtn' type="button" onClick={DoneClick} >Done</button>					
					</div>	
				</div>
			</form>
		)
	}
	else{
		return(
			<form>
				<div className='labelContainer'>
						<label className="label"><b>Add Quiz Successfully</b></label>
				</div>	
			</form>
		)
	}
}
export{ProfileForm,ChangePassForm,JoinRoomForm,AddQuizForm}

function useEffect(arg0: () => void, arg1: any[]) {
	throw new Error("Function not implemented.");
}
