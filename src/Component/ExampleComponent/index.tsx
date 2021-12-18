import "./test.css";
function BTS(props:any){
	let msg = props?.message  ?? "Message not found";
	msg += "19010923212";
	return <p className="black">{msg}</p>;

}
export {BTS}