import React, { Component, useState } from 'react'
import "./AdminPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus,faMinus  } from "@fortawesome/free-solid-svg-icons";
const data = [
    { id:19127614,name: "Tuan", age: 19, gender: "Male" },
    { id:19127615,name: "Vu", age: 19, gender: "Female" },
    { id:19127616,name: "Huy", age: 25, gender: "Male"},
    { id:19127617,name: "Thien", age: 20, gender: "Male"},
    { id:19127618,name: "Phat", age: 20, gender: "Male"},
  ]
function AdminPage(){
    return(
        <div className='accountTable'>
            <table>
                <thead>
                    <tr className="tableName">                     
                        <th colSpan={4}>                       
                            ACCOUNT INFO                           
                            <FontAwesomeIcon className='tableBtn' id='addAccbtn'  icon={faPlus}></FontAwesomeIcon> 
                            <FontAwesomeIcon className='tableBtn' id='deleteAccbtn'icon={faMinus}></FontAwesomeIcon>                         
                        </th>
                    </tr>
                    <tr className="headerRow">
                        <th className="columnName">SCHOOL ID</th>
                        <th className="columnName">NAME</th>
                        <th className="columnName">AGE</th>
                        <th className="columnName">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0,data.length).map((val, key) => {
                    return (
                        <tr className='bodyRow' key={key}>
                            <td><input id="IDColumn" type="text" defaultValue={val.id}/></td>
                            <td><input id="NameColumn" type="text" defaultValue={val.name}/></td>
                            <td><input id="AgeColumn" type="text" defaultValue={val.age}/></td>                     
                            <td>
                                <select id="GenderColumn" defaultValue={val.gender}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>                       
                        </tr>
                    )
                    })}
                </tbody>
            </table>
    </div>
    )
}
export{AdminPage}