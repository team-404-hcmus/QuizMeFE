import React, { Component, Fragment, useState } from 'react'
import "./AdminPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myData from './data.json';
import {  faPlus,faMinus,faEdit,faCheck,faWindowClose, faSave } from "@fortawesome/free-solid-svg-icons";
function AdminPage(props:any){
    const [accounts, setAccounts] = useState(myData );
    const [addNewAccount, setAddNewAccount] = useState({
        username:"",
        password:"1",
        fullname: "", 
        dob: "", 
        gender: "" 
    })
    const [editedAccount, setEditedAccount] = useState({
        username:"",
        password:"",
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
    const handleAddAccountSubmit = (event:any) => {
        event.preventDefault();
        const newAcc = {
            username: addNewAccount.username,
            password: addNewAccount.password,
            fullname: addNewAccount.fullname,
            dob: addNewAccount.dob,
            gender: addNewAccount.gender
        };
    
        const newAccounts = [...accounts, newAcc];
        setAccounts(newAccounts);
    };
    // xóa account
    function handleRemove(username:any) {
        const newAccounts = accounts.filter((item) => item.username !== username);
    
        setAccounts(newAccounts);
    }
    //chỉnh sửa account
    const handleEditClick = (event:any, account:any) => {
        event.preventDefault();
        setEditAccountId(account.username);
    
        const newAcc = {
            username: account.username,
            password: editedAccount.password,
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
    const handleEditAccountSubmit = (event:any) => {
        event.preventDefault();
        const newAcc = {
            username: editedAccount.username,
            password: editedAccount.password,
            fullname: editedAccount.fullname,
            dob: editedAccount.dob,
            gender: editedAccount.gender
        }; 
        const newAccounts = [...accounts];
        const index = accounts.findIndex((accounts) => accounts.username === editAccounttId);
        newAccounts[index] = newAcc;
        setAccounts(newAccounts);
        setEditAccountId(null);
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