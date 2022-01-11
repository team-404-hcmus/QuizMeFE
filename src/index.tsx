import React, { useState } from "react";
import ReactDOM from "react-dom";
import {LandingPage} from "Pages/LandingPage";
import {QuizPlaying} from "Pages/QuizPlaying";
import {HomePage} from "Pages/HomePage";
import {AdminPage} from "Pages/AdminPage";
import { userData } from "Hooks/ContextProvider";
function APP(){
	const [state, setState] = useState<number>(0);
	if(state ===0){	
		return <LandingPage stateFunction={setState}></LandingPage>;	
	}
	else{
		return <HomePage stateFunction={setState}></HomePage>;	
	}

}

ReactDOM.render(<>
<AdminPage></AdminPage>
</>, document.getElementById("root"));

function useContext(data: React.Context<any>) {
	throw new Error("Function not implemented.");
}
