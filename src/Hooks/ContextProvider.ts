import React from "react";

let userData:any ={};
function setUserData(data:any){
	userData = data;

}
const ProductionIp = "207.148.75.56";
const TestIP = "1.53.142.197";
const currentIP = ProductionIp;
export{userData,setUserData,currentIP};