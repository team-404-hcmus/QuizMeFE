import React, { useState } from "react";
import "./form.css";
function ProfileForm(props:any) {
	const account = 
		{
			schoolID:"19127614",
			fullname:"Nguyen Anh Tuan",
			dob:"25/12/2001",
			gender:"Male"
		}
	return(
		<form>
			<div >	
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
				
				<div>
					<div className='centerBtn'>
						<button className="landingBtn">Change Password</button>
					</div>	
				</div>					
			</div>
		</form>
	)
}
export{ProfileForm}