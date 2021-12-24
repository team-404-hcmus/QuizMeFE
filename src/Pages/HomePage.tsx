import React, { useState } from "react";
import "./HomePage.css";
import { ProfileForm } from "Component/HomeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faQuestion,
    faArrowCircleLeft,faHandshake } from "@fortawesome/free-solid-svg-icons";


function HomePage()
{
    const [profile, setProfile] = useState(false);
    function clickProfile(){
        setProfile( function(e){
            return !e;
        })
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = "block";//set overlay background
        }
    }
    function offOverlay()//tủn off overlay background
    {
        setProfile( function(e){
            return !e;
        })
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = "none";
        }
    }
    return(
        <>
            {profile?<ProfileForm></ProfileForm>:null}
            <div id="overlay" onClick={offOverlay}>		
			</div>
            <div className="homepageContainer">
                <div className="MenuIcon">
                    <div className="leftMenu">
                        <FontAwesomeIcon className="backIcon" icon={faArrowCircleLeft} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="rightMenu">
                        <FontAwesomeIcon className="rightIcon" icon={faQuestion} size="2x"></FontAwesomeIcon>   
                        <FontAwesomeIcon className="rightIcon" icon={faHandshake}size="2x"></FontAwesomeIcon>
                        <FontAwesomeIcon className="rightIcon"icon={faUser}size="2x"
                        onClick={clickProfile}></FontAwesomeIcon>
                        <FontAwesomeIcon className="rightIcon"icon={faHome}size="2x"></FontAwesomeIcon>     
                    </div>      
                </div>        
            </div>
        </>
        
    )
}
export{HomePage}