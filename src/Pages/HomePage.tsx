import React, { useState } from "react";
import "./HomePage.css";
import { ProfileForm, JoinRoomForm } from "Component/HomeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faQuestion,
    faArrowCircleLeft,faHandshake, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import internal from "stream";


function HomePage(props:any)
{
    const quizs = [
		{
			name: 'Digital Image Processing 1',	
            updatedDate: '25/12/2001',		
		},
		{
			name: 'Digital Image Processing 2',
            updatedDate: '13/12/2001',	
		},
		{
			name: 'Computer Graphic',
            updatedDate: '25/12/2001',			
		},
		{
			name: 'Machine Learning',
            updatedDate: '25/12/2001',	
		},	
        {
			name: 'Maths',
            updatedDate: '25/12/2001',	
		},	
        
        	
	];
    const [profile, setProfile] = useState(false);
    const [joinroom, setJoinRoom] = useState(false);
    const [selection, setSelection] = useState(1);
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
    function changeScreen(){
         if(selection ===1 )
                    {
                        return <p>HEllo</p>;
                    }
                    return (<div id='SelectQuizScreen'>
                    <div className='searchBarContainer'>
                        <input type="text" placeholder="Search by topic..." id='searchBar'></input>
                    </div>
                    <div className='quizsDisplay'>
                        {quizs.map((quizname)=>(
                            <div className='quizContainer'>
                                 <p className='quizName'>{quizname.name}</p>
                                 <p className='quizUpdateDate'>{quizname.updatedDate}</p>
                                 <FontAwesomeIcon className='playIcon'icon={faCaretRight}size="5x"
                                 onClick={playGame}></FontAwesomeIcon> 
                            </div>                      
                        ))}
                    </div>                    
                </div> );

    }
    return(
        <>
            {profile?<ProfileForm></ProfileForm>:null}
            {joinroom?<JoinRoomForm></JoinRoomForm>:null}
            <div id='overlay' onClick={offOverlayHomePage}>		
			</div>
            <div className='homepageContainer'>
                <div className='MenuIcon'>
                    <div className='leftMenu'>
                        <FontAwesomeIcon className='backIcon' icon={faArrowCircleLeft} size="2x"
                        onClick={backLandingPage}></FontAwesomeIcon>
                    </div>
                    <div className='rightMenu'>
                        <FontAwesomeIcon className='rightIcon' icon={faQuestion} size="2x"
                        onClick={playGame}></FontAwesomeIcon>   
                        <FontAwesomeIcon className='rightIcon' icon={faHandshake}size="2x"
                        onClick={clickJoinRoom}></FontAwesomeIcon>
                        <FontAwesomeIcon className='rightIcon'icon={faUser}size="2x"
                        onClick={clickProfile}></FontAwesomeIcon>
                         <FontAwesomeIcon className='rightIcon'icon={faQuestion}size="2x"
                        onClick={(e)=>{
                            setSelection(0);
                        }}></FontAwesomeIcon>

                        <FontAwesomeIcon onClick={(e)=>{
                            setSelection(1);
                        }} className='rightIcon'icon={faHome}size="2x"></FontAwesomeIcon>     
                    </div>      
                </div> 
                {changeScreen()}
                     
            </div>
        </>
        
    )
}
export{HomePage}