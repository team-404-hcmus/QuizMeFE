import "./form.css";
function LoginForm(props:any) {
	
	return (
	  <form className="Login">
		<div >	
			<div className="labelContainer">
				<label id="label"><b>Login</b></label>
			</div>
			
			<div className="container">
				<label htmlFor="uname"><b>Username</b></label>
				<input type="text" placeholder="Enter Username" name="uname" required></input>

				<label htmlFor="pass"><b>Password</b></label>
				<input type="text" placeholder="Enter Password" name="pass" required></input>

				
				<span className="pass"> <a href="#">Forgot your password?</a></span>			
			</div>
			
			<div className="container">
				<div className="centerBtn">
					<button type="submit">Login</button>
				</div>	
			</div>		
			
		</div>

	  </form>
	)
}
function ForgetPassForm(props:any) {
	return(
		<form>
			<div >	
				<div className="labelContainer">
					<label id="label"><b>FORGOT</b></label>
				</div>
				<div className="labelContainer">
					<label id="label"><b>PASSWORD</b></label>
				</div>
				<div className="container">
					<b>We will send new password to your email</b>
				</div>
				<div className="container">
					<label htmlFor="schoolID"><b>School ID</b></label>
					<input type="text" placeholder="Enter School ID" name="schoolID" required></input>		
				</div>
				
				<div className="container">
					<div className="centerBtn">
						<button type="submit">Submit</button>
					</div>	
				</div>							
			</div>
		</form>
	)
}
export {LoginForm,ForgetPassForm}