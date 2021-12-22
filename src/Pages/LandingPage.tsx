import { LoginForm } from "Component/FormComponent";
import React, { useState } from "react";
import "./LandingPage.css";
function LandingPage()
{
	const [state, setState] = useState(false);
	
	function clickLogin(){
		setState( function(e){
			return !e;
		})
		const overlay = document.getElementById('overlay');
		if (overlay) {
			overlay.style.display = "block";//set overlay background
		}
	}
	function offOverlay()//tủn off overlay background
	{
		setState( function(e){
			return !e;
		})
		const overlay = document.getElementById('overlay');
		if (overlay) {
			overlay.style.display = "none";
		}
	}

	return (
		<>
			{state?<LoginForm></LoginForm>:null}
			<div id="overlay" onClick={offOverlay}>		
			</div>
			<div id="LandingContainer">		
				<div className="LgBtnContainer">
					<button className="LoginButton"onClick={clickLogin}>Login</button>
					
				</div>		
				<form className="middleLP">
					<div className="Test">
						<h1> JOIN QUIZME</h1>
						<h2> Educational Inspiration</h2>
						<div className="h3container">
							<h3> The power of interactive is in your device
							We bring the ease of learning to your student</h3>
						</div>					
					</div>			
				</form>
			</div>
		</>
		
	)
}

function Home(){
	

}
export {Home,LandingPage}