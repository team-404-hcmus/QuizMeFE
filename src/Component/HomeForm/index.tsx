import { userData } from "Hooks/ContextProvider";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./form.css";
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
	function changePasswordBtnClick(){
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
						<button className='landingBtn' type="submit">Join</button>
					</div>	
				</div>	
			</div>
		</form>
	)
}
function AddQuizForm(props:any){
	const[addStage, setAddStage] = useState(0);
	const[quizName, setQuizName] = useState("");
	const[numberQuestion, setNumberQuestion] = useState(0);
	function HandleQuizNameChange(event:any){
        event.preventDefault();
        setQuizName(event.target.value)
    }
	
	function SetQuizNameClick(){
		setAddStage(1)
	}

	function AddQuestionClick(){
		setNumberQuestion(numberQuestion+1)
	}

	if(addStage==0)
	{
		return(
			<form>
				<div className='labelContainer'>
						<label className="label"><b>ADD QUIZ</b></label>
				</div>	
				<div className='container'>
					<input type="text" placeholder="Enter Quiz Name" className='roomPin' required
					onChange={HandleQuizNameChange}></input>							
				</div>
				<div className='container'>
					<div className='addQuizBtn'>
						<button className='landingBtn' type="button" onClick={SetQuizNameClick}>Next</button>
					</div>	
				</div>	
			</form>
		)
	}
	else{
		return(
			<form className="AddQuizForm">
				<div className='labelContainer'>
						<label className="label"><b>{quizName}</b></label>
				</div>					
					
				<div className='container'>
					<p>Question Number: {numberQuestion}</p>	
					<input type="text" required placeholder="Input Question"/>
					<input type="text" required className="ans1" placeholder="Answer 1"/>
					<select className="ans1">
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<input type="text" required className="ans2" placeholder="Answer 2"/>
					<select className="ans2">
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<input type="text" required className="ans3" placeholder="Answer 3"/>
					<select className="ans3">
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<input type="text" required className="ans4" placeholder="Answer 4"/>
					<select className="ans4">
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<div className='addQuestionBtn'>
						<button className='landingBtn' type="button" onClick={AddQuestionClick} >Add</button>
					</div>	
				</div>
			</form>
		)
	}
}
export{ProfileForm,ChangePassForm,JoinRoomForm,AddQuizForm}

function useEffect(arg0: () => void, arg1: any[]) {
	throw new Error("Function not implemented.");
}
