import React, { useState } from "react";
import "./HomePage.css";
import { ProfileForm, JoinRoomForm } from "Component/HomeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faQuestion,
    faArrowCircleLeft,faHandshake } from "@fortawesome/free-solid-svg-icons";
import internal from "stream";


function HomePage(props:any)
{
    const quizs = [
		{
			name: 'Digital Image Processing 1',			
		},
		{
			name: 'Digital Image Processing 2',
		},
		{
			name: 'Computer Graphic',		
		},
		{
			name: 'Machine Learning',
		},	
        {
			name: 'Maths',
		},	
        	
	];
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
    function changeScreen(selection:number){
        const homeScreen=document.getElementById('HomeScreen');
        const selectQuizScreen= document.getElementById('SelectQuizScreen')
        if(selection==1){
            if(homeScreen){
                homeScreen.style.display="block";
            }   
            if(selectQuizScreen) {
                selectQuizScreen.style.display="none";
            }  
        }
        else{
            if(homeScreen){
                homeScreen.style.display="none";
            }   
            if(selectQuizScreen) {
                selectQuizScreen.style.display="block";
            }  
        }
    }
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
                <div id='HomeScreen'>
                </div> 
                <div id='SelectQuizScreen'>
                    <div className='searchBarContainer'>
                        <input type="text" placeholder="Search by topic..." id='searchBar'></input>
                    </div>
                    <div className='quizsDisplay'>
                        {quizs.map((quizname)=>(
                            <div className="quizContainer">
                                 <p className='quizName'>{quizname.name}</p>
                            </div>                      
                        ))}
                    </div>
                    
                </div>      
            </div>
        </>
        
    )
}
export{HomePage}