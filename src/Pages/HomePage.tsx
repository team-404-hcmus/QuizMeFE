import React, { useState } from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faQuestion,
    faArrowCircleLeft,faHandshake } from "@fortawesome/free-solid-svg-icons";

function HomePage()
{
    return(
        <>
            <div className="homepageContainer">
                <div className="MenuIcon">
                    <div className="leftMenu">
                        <FontAwesomeIcon className="backIcon" icon={faArrowCircleLeft} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="rightMenu">
                        <FontAwesomeIcon className="rightIcon" icon={faQuestion} size="2x"></FontAwesomeIcon>   
                        <FontAwesomeIcon className="rightIcon" icon={faHandshake}size="2x"></FontAwesomeIcon>
                        <FontAwesomeIcon className="rightIcon"icon={faUser}size="2x"></FontAwesomeIcon>
                        <FontAwesomeIcon className="rightIcon"icon={faHome}size="2x"></FontAwesomeIcon>     
                    </div>      
                </div>        
            </div>
        </>
        
    )
}
export{HomePage}