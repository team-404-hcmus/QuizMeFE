import "./test.css";
function Form(props:any) {
	
	return (
	  <form>
		<div className="Login">	
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
export {Form}