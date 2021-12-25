import "./form.css";
import React, { useState } from "react";
function LoginForm(props:any) {
	const [getPass, setgetPass] = useState(false);
	const [username,setUsername] = useState("");
	const [pwd,setPwd] = useState("");
	function clickGetPass(){
		setgetPass( function(e){
			return !e;
		})
	}
	
	return (
	  <form className="Login" onSubmit={async function(e) {
		e.preventDefault();
		const response = await fetch("http://localhost:8080/api/login", {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
		},

				body: JSON.stringify({username:username,pwd:pwd}) // body data type must match "Content-Type" header
			});
		if(response.status !== 200){
			console.error("wrong");
		}
		else{
			let data = await response.text();
			console.log(data);
			const response2 = await fetch("http://localhost:8080/api/auth", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {'Content-Type': 'application/json'},// 'Content-Type': 'application/x-www-form-urlencoded',		
			body: JSON.stringify({key:data}) // body data type must match "Content-Type" header
			});
			if(response2.status === 200)
			{
				props.setPage(1);
			}
		}
	  }}>
		{getPass?<ForgetPassForm></ForgetPassForm>:null}
		<div >	
			<div className='labelContainer'>
				<label className='label'><b>Login</b></label>
			</div>
			
			<div className='container'>
				<label htmlFor="uname"><b>Username</b></label>
				<input onChange={e => {setUsername(e.currentTarget.value)}} type="text" placeholder="Enter Username" name="uname" required></input>

				<label htmlFor="pass"><b>Password</b></label>
				<input onChange={e => {setPwd(e.currentTarget.value)}} type="text" placeholder="Enter Password" name="pass" required></input>

				
				<span className="pass" onClick={clickGetPass}> <a href="#">Forgot your password?</a></span>			
			</div>
			
			<div className='container'>
				<div className='centerBtn'>
					<button className='landingBtn' type="submit">Login</button>
				</div>	
			</div>					
		</div>
	  </form>
	)
}
function ForgetPassForm(props:any) {
	return(
		<form>
			<div>	
				<div className='labelContainer'>
					<label className="label"><b>FORGOT</b></label>
				</div>
				<div className='labelContainer'>
					<label className="label"><b>PASSWORD</b></label>
				</div>
				<div className='container'>
					<b>We will send new password to your email</b>
				</div>
				<div className='container'>
					<label htmlFor="schoolID"><b>School ID</b></label>
					<input type="text" placeholder="Enter School ID" name="schoolID" required></input>		
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
export {LoginForm,ForgetPassForm}