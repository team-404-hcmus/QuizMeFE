import React, { Component, Fragment, useEffect, useState } from 'react'
import "./AdminPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myData from './data.json';
import {  faPlus,faMinus,faEdit,faCheck,faWindowClose, faSave } from "@fortawesome/free-solid-svg-icons";
import { currentIP, userData } from 'Hooks/ContextProvider';
function AdminPage(props:any){
    const [accounts, setAccounts] = useState([]as any[]);
    useEffect(() => {
        fetch(`http://${currentIP}:8080/api/getAllUser`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		'Content-Type': 'application/json'
		},body: JSON.stringify({"key":userData.loginKey})
        }).then(respone=>{
            respone.json().then((v:any) =>{
                setAccounts(v);
            })
        })
        return () => {
            
        }
    }, [])
    const [addNewAccount, setAddNewAccount] = useState({
        username:"",
        pwd:"1",
        fullname: "", 
        dob: "", 
        gender: "" 
    })
    const [editedAccount, setEditedAccount] = useState({
        username:"",
        pwd:"",
        fullname: "", 
        dob: "", 
        gender: "" 
    })
    const [editAccounttId, setEditAccountId] = useState(null);
    //thêm account
    function handleAddAccountChange(event:any){
       event.preventDefault();
       const fieldName = event.target.getAttribute('name');
       const fieldValue =event.target.value;

       const newAccountData:any={...addNewAccount};
       newAccountData[fieldName]=fieldValue;
       setAddNewAccount(newAccountData);
    }
    async function handleAddAccountSubmit(event:any){
        event.preventDefault();
        const newAcc = {
            username: addNewAccount.username,
            pwd: addNewAccount.pwd,
            fullname: addNewAccount.fullname,
            dob: addNewAccount.dob,
            gender: addNewAccount.gender,
            role:"student"
        };
        const response = await fetch(`http://${currentIP}:8080/api/CreateUser`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		'Content-Type': 'application/json'
		},body: JSON.stringify({...newAcc,"key":userData.loginKey})
        }); 
        if(response.status === 200)
        {
            setAccounts((value:any[])=>{
                return [...value, newAcc]
            })
        }
    };
    // xóa account
    async function handleRemove(username:any) {
        const newAccounts = accounts.filter((item) => item.username !== username);
        const response = await fetch(`http://${currentIP}:8080/api/DeleteUser`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		'Content-Type': 'application/json'
		},body: JSON.stringify({username,"key":userData.loginKey})
        }); 
        if(response.status === 200)
        {
            setAccounts(newAccounts);
        }
        setAccounts(newAccounts);
    }
    //chỉnh sửa account
    const handleEditClick = (event:any, account:any) => {
        event.preventDefault();
        setEditAccountId(account.username);
    
        const newAcc = {
            username: account.username,
            pwd: editedAccount.pwd,
            fullname: editedAccount.fullname,
            dob: editedAccount.dob,
            gender: editedAccount.gender
        };
    
        setEditedAccount(newAcc);
      };
    function handleEditAccountChange(event:any){
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue =event.target.value;
 
        const newAccountData:any={...editedAccount};
        newAccountData[fieldName]=fieldValue;
        setEditedAccount(newAccountData);
    }
    async function handleEditAccountSubmit(event:any){
        event.preventDefault();
        const newAcc = {
            username: editedAccount.username,
            pwd: editedAccount.pwd,
            fullname: editedAccount.fullname,
            dob: editedAccount.dob,
            gender: editedAccount.gender
        }; 
        const response = await fetch(`http://${currentIP}:8080/api/EditUser`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
		'Content-Type': 'application/json'
		},body: JSON.stringify({...newAcc,"key":userData.loginKey})
        }); 
        if(response.status === 200)
        {
            const newAccounts = [...accounts];
            const index = accounts.findIndex((accounts) => accounts.username === editAccounttId);
            newAccounts[index] = newAcc;
            setAccounts(newAccounts);
            setEditAccountId(null);
        }
    };
    function handleCancelClick(){
        setEditAccountId(null);
    }
    function StudentTable(studentData:any){ 
        return(  
            <div className='accountTable'>
                <table>
                    <thead>
                        <tr className="tableName">                     
                            <th colSpan={5}>                       
                                STUDENTS INFO  
                                <FontAwesomeIcon className='accountSaveBtn' icon={faSave}
                                ></FontAwesomeIcon>                                                                               
                            </th>
                        </tr>
                        <tr className="headerRow">
                            <th className="columnName">SCHOOL ID</th>
                            <th className="columnName">NAME</th>
                            <th className="columnName">DOB</th>
                            <th className="columnName">GENDER</th>
                            <th className="columnName">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.slice(0,accounts.length).map((val:any, key:any) => (
                        <Fragment>
                            {editAccounttId===val.username ?
                                (                          
                                    <tr className='bodyRow' key={key}>
                                        <td>{val.username}</td>
                                        <td> 
                                            <input id="accColumn" type="text" name="fullname" placeholder='Input Full Name' required
                                            onChange={handleEditAccountChange}/>
                                        </td>
                                        <td> 
                                            <input id="accColumn" type="text" name="dob" placeholder='Input DoB' required
                                            onChange={handleEditAccountChange}/>
                                        </td>
                                        <td> 
                                            <input id="accColumn" type="text" name="gender" placeholder='Input Gender' required
                                            onChange={handleEditAccountChange}/>
                                        </td>
                                        <td>
                                            <div id="actionBtnContainer" >
                                                <FontAwesomeIcon className='actionBtn' icon={faCheck}
                                                onClick={handleEditAccountSubmit}></FontAwesomeIcon> 
                                                <FontAwesomeIcon className='actionBtn' icon={faWindowClose}
                                                onClick={handleCancelClick}></FontAwesomeIcon>  
                                            </div>                                 
                                        </td>                     
                                    </tr>
                                ) :
                                (
                                    <tr className='bodyRow'key={key}>
                                        <td>{val.username}</td>
                                        <td>{val.fullname}</td>
                                        <td>{val.dob}</td>                     
                                        <td>{val.gender}</td>  
                                        <td>
                                            <div id="actionBtnContainer" >
                                                <FontAwesomeIcon className='actionBtn' icon={faEdit}
                                                onClick={(event)=>handleEditClick(event,val)}></FontAwesomeIcon> 
                                                <FontAwesomeIcon className='actionBtn' icon={faMinus}
                                                onClick={()=>handleRemove(val.username)}></FontAwesomeIcon>  
                                            </div>                                 
                                        </td>                     
                                    </tr>)   
                                }
                        </Fragment>
                        )
                    )}
                    </tbody>
                    <thead>
                        <tr className="tableName">                     
                            <th colSpan={5}>                       
                                ADD ACOUNTS                                                                          
                            </th>
                        </tr>
                        <tr className="bodyRow">
                            <td> 
                                <input id="accColumn" type="text" name="username" placeholder='Input School ID' required
                                onChange={handleAddAccountChange}/>
                            </td>
                            <td> 
                                <input id="accColumn" type="text" name="fullname" placeholder='Input Full Name' required
                                 onChange={handleAddAccountChange}/>
                            </td>
                            <td> 
                                <input id="accColumn" type="text" name="dob" placeholder='Input DoB' required
                                 onChange={handleAddAccountChange}/>
                            </td>
                            <td> 
                                <input id="accColumn" type="text" name="gender" placeholder='Input Gender' required
                                 onChange={handleAddAccountChange}/>
                            </td>
                            <td>
                                <div id="actionBtnContainer" >                                  
                                    <FontAwesomeIcon className='actionBtn' icon={faPlus} 
                                    onClick={handleAddAccountSubmit}></FontAwesomeIcon>                                      
                                </div>                                 
                            </td>   
                        </tr>                 
                    </thead>
                </table>
            </div>
        )
    }
    const [action, setAction] = useState(false);
    function ViewStudent(){
        setAction( function(e){       
			return !e;
		})
    }
    return(
        <>
            {action==true?StudentTable(accounts):null} 
            <div>
                <button className="LoginButton" onClick={ViewStudent}>Students Account</button>
            </div>          
        </>
    )
}
export{AdminPage}