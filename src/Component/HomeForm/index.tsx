import React, { useState } from "react";
import "./form.css";
function ProfileForm(props:any) {
	const [changePass, setchangePass] = useState(false);
	const account = 
		{
			schoolID:"19127614",
			fullname:"Nguyen Anh Tuan",
			dob:"25/12/2001",
			gender:"Male"
		}
	function clickChangePass(){
		setchangePass( function(e){
			return !e;
		})
	}
	return(	
		<form>		
			{changePass?<ChangePassForm></ChangePassForm>:null}				
			<div>															
				<div className='labelContainer'>
					<label className='label'><b>Profile</b></label>
				</div>
				
				<div className='container'>
					<label htmlFor='idDisplay' className='labelDisplay'><b>School ID</b></label>
					<input className='displayField' name='idDisplay'
					placeholder={account.schoolID}
					></input>	

					<label htmlFor='nameDisplay' className='labelDisplay'><b>Full Name</b></label>
					<input className='displayField' name='nameDisplay'
					placeholder={account.fullname}
					></input>

					<label htmlFor='DoBDisplay' className='labelDisplay' ><b>DoB</b></label>				
					<input className='displayField' name='DoBDisplay'
					placeholder={account.dob}></input>		

					<label htmlFor='genderDisplay' className='labelDisplay'><b>Gender</b></label>		
					<input className='displayField' name='genderDisplay'
					placeholder={account.gender}></input>	
				</div>
				
				<div className='container'>
					<div className='centerBtn'>
						<button className='landingBtn' type="submit" onClick={clickChangePass}>Change Password</button>
					</div>	
				</div>					
			</div>
		</form>
	)
}

function ChangePassForm(props:any){
	return(
		<form className='joinRoomForm'>
			<div>
				<div className='labelContainer'>
					<label className="label"><b>CHANGE</b></label>
				</div>
				<div className='labelContainer'>
					<label className="label"><b>PASSWORD</b></label>
				</div>
				<div className='container'>
					<label htmlFor="oldPass"><b>Old Password</b></label>
					<input type="text" placeholder="Enter Your Old Password" name="oldPass" required></input>
					<label htmlFor="newPass"><b>New Password</b></label>
					<input type="text" placeholder="Enter Your New Password" name="newPass" required></input>
					<label htmlFor="confirmPass"><b>Confirm</b></label>
					<input type="text" placeholder="Confirm Your New Password" name="confirmPass" required></input>		
				</div>
				<div className='container'>
					<div className='centerBtn'>
						<button className='landingBtn' type="submit">Submit</button>
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

export{ProfileForm,ChangePassForm,JoinRoomForm}