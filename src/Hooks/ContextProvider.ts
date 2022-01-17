import React from "react";

let userData:any ={};
function setUserData(data:any){
	userData = data;

}
const ProductionIp = "207.148.75.56";
const TestIP = "118.71.237.164";
const currentIP = ProductionIp;
export{userData,setUserData,currentIP};