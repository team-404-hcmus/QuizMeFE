import React, { useState } from "react";
import ReactDOM from "react-dom";
import {LandingPage} from "Pages/LandingPage";
import {QuizPlaying} from "Pages/QuizPlaying";
import {HomePage} from "Pages/HomePage";

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
<HomePage></HomePage>
</>, document.getElementById("root"));