import React, { Component, useState } from 'react'
import "./AdminPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myData from './data.json';
import {  faPlus,faMinus,faEdit  } from "@fortawesome/free-solid-svg-icons";
function AdminPage(props:any){
    const [accounts, setAccounts] = useState(myData);
    const [addNewAccount, setAddNewAccount] = useState({
        username:"",
        password:"1",
        fullname: "", 
        dob: "", 
        gender: "" 
    })
    function handleAddAccountChange(event:any){
       event.preventDefault();
       const fieldName = event.target.getAttribute('name');
       const fieldValue =event.target.value;

       const newAccountData:any={...addNewAccount};
       newAccountData[fieldName]=fieldValue;
       setAddNewAccount(newAccountData);
       console.log(addNewAccount);
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
    function StudentTable(){ 
        return(  
            <div className='accountTable'>
                <table>
                    <thead>
                        <tr className="tableName">                     
                            <th colSpan={5}>                       
                                STUDENTS INFO                                                                               
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
                        {accounts.reverse().slice(0,accounts.length).map((val:any, key:any) => {
                        return (
                            <tr className='bodyRow'>
                                <td>{val.username}</td>
                                <td>{val.fullname}</td>
                                <td>{val.dob}</td>                     
                                <td>{val.gender}</td>  
                                <td>
                                    <div id="actionBtnContainer" >
                                        <FontAwesomeIcon className='actionBtn' icon={faEdit}></FontAwesomeIcon> 
                                        <FontAwesomeIcon className='actionBtn' icon={faMinus}></FontAwesomeIcon>  
                                    </div>                                 
                                </td>                     
                            </tr>
                            )    
                        }
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
                                    <FontAwesomeIcon className='actionBtn' icon={faPlus} type="submit"
                                    onClick={handleAddAccountSubmit}></FontAwesomeIcon>                                      
                                </div>                                 
                            </td>   
                        </tr>                 
                    </thead>
                </table>
            </div>
        )
    }
    return(
        <>
            {StudentTable()}
        </>
    )
}
export{AdminPage}