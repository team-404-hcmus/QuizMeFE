import React, { useState } from "react";
import "./HomePage.css";
import { ProfileForm, JoinRoomForm } from "Component/HomeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faQuestion,
    faArrowCircleLeft,faHandshake } from "@fortawesome/free-solid-svg-icons";


function HomePage(props:any)
{
    const [profile, setProfile] = useState(false);
    const [joinroom, setJoinRoom] = useState(false);
    function clickProfile(){
        setProfile( function(e){
            return !e;
        })
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = "block";//set overlay background
        }
    }
    function clickJoinRoom(){
        setJoinRoom( function(e){
            return !e;
        })
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = "block";//set overlay background
        }
    }
    function offOverlayHomePage()//tủn off overlay background
    {
        if(profile==true)
        {
            setProfile(false);       
        }
        if(joinroom==true)
        {
            setJoinRoom(false);
        }       
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = "none";
        }
    }
    function backLandingPage(){
        props.stateFunction(0);
    };
    function playGame(){
        props.stateFunction(2);
    };
    return(
        <>
            {profile?<ProfileForm></ProfileForm>:null}
            {joinroom?<JoinRoomForm></JoinRoomForm>:null}
            <div id="overlay" onClick={offOverlayHomePage}>		
			</div>
            <div className="homepageContainer">
                <div className="MenuIcon">
                    <div className="leftMenu">
                        <FontAwesomeIcon className="backIcon" icon={faArrowCircleLeft} size="2x"
                        onClick={backLandingPage}></FontAwesomeIcon>
                    </div>
                    <div className="rightMenu">
                        <FontAwesomeIcon className="rightIcon" icon={faQuestion} size="2x"
                        onClick={playGame}></FontAwesomeIcon>   
                        <FontAwesomeIcon className="rightIcon" icon={faHandshake}size="2x"
                        onClick={clickJoinRoom}></FontAwesomeIcon>
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