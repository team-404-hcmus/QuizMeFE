import { QForm } from "Component/FormComponent";
import React, { useState } from "react";

function Home(){
	const [state, setState] = useState(false);
	function click(){
		setState( function(e){
			return !e;
		})
	}
	return(<>
	<button onClick={click}>ClickMe</button>
		{state?<QForm></QForm>:null}
	</>);
}
export {Home}