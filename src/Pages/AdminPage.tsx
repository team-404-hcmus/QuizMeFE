import React, { Component, useState } from 'react'
import "./AdminPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus,faMinus,faEdit  } from "@fortawesome/free-solid-svg-icons";
function AdminPage(props:any){
    const data=[
        { username:"19127614",fullname: "Tuan", dob: "25/12/2001", gender: "Male" },
        { username:"19127615",fullname: "Vu", dob: "25/12/2001", gender: "Female" },
        { username:"19127616",fullname: "Huy", dob: "25/12/2001", gender: "Male"},
        { username:"19127617",fullname: "Thien", dob: "25/12/2001", gender: "Male"},
        { username:"19127618",fullname: "Phat", dob: "25/12/2001", gender: "Male"},
    ]
   
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
                            <th className="columnName">AGE</th>
                            <th className="columnName">GENDER</th>
                            <th className="columnName">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.reverse().slice(0,data.length).map((val:any, key:any) => {
                        return (
                            <tr className='bodyRow'>
                                <td><input id="IDColumn" type="text" defaultValue={val.username}/></td>
                                <td><input id="NameColumn" type="text" defaultValue={val.fullname}/></td>
                                <td><input id="AgeColumn" type="text" defaultValue={val.dob}/></td>                     
                                <td>
                                    <select id="GenderColumn" defaultValue={val.gender} >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </td>  
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