import React, { useState } from "react";
import ReactDOM from "react-dom";
import {LoginForm,ForgetPassForm} from "Component/FormComponent";
import {LandingPage} from "Pages/LandingPage";
import {QuizPlaying} from "Pages/QuizPlaying";

function APP(){
	const [state, setstate] = useState<number>(0);
	if(state ===0){		
		
		return <LandingPage stateFunction={setstate}></LandingPage>;
	}
	else{
		return <QuizPlaying></QuizPlaying>;
	}
}
ReactDOM.render(<>
<APP></APP>
</>, document.getElementById("root"));