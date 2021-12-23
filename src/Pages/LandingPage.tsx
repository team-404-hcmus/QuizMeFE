import { LoginForm,ForgetPassForm } from "Component/FormComponent";
import React, { useState } from "react";
import "./LandingPage.css";
function LandingPage(props:any)
{
	const [login, setLogin] = useState(false);
	function clickLogin(){
		setLogin( function(e){
			return !e;
		})
		const overlay = document.getElementById('overlay');
		if (overlay) {
			overlay.style.display = "block";//set overlay background
		}
	}
	function offOverlay()//tủn off overlay background
	{
		setLogin( function(e){
			return !e;
		})
		const overlay = document.getElementById('overlay');
		if (overlay) {
			overlay.style.display = "none";
		}
	}

	return (
		<>
			{login?<LoginForm setPage={props.stateFunction}></LoginForm>:null}
			<div id="overlay" onClick={offOverlay}>		
			</div>
			<div id="LandingContainer"
			style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.png'})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat' }}>	
					
				<div className="LgBtnContainer">
					<button className="LoginButton"onClick={clickLogin}>Login</button>
				</div>		
				<form className="middleLP">
					<div className="Test">
						<h1> JOIN QUIZME</h1>
						<h2> Educational Inspiration</h2>
						<h3> The power of interactive is in your device
							We bring the ease of learning to your student</h3>				
						<img className="landingImg" src={process.env.PUBLIC_URL+"/images/middlanding.png"} width="100" alt="test"></img>													
					</div>			
				</form>
			</div>
		</>
		
	)
}

export {LandingPage}