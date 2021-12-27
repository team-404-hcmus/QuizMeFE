import React, { useState,useEffect } from "react";
import "./HomePage.css";
import { ProfileForm, JoinRoomForm } from "Component/HomeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faQuestion,
    faArrowCircleLeft,faHandshake, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Question, QuizPlaying } from "./QuizPlaying";


function HomePage(props:any)
{
    // const quizs = [
	// 	{
	// 		name: 'Digital Image Processing 1',	
    //         updatedDate: '25/12/2001',		
	// 	},
	// 	{
	// 		name: 'Digital Image Processing 2',
    //         updatedDate: '13/12/2001',	
	// 	},
	// 	{
	// 		name: 'Computer Graphic',
    //         updatedDate: '25/12/2001',			
	// 	},
	// 	{
	// 		name: 'Machine Learning',
    //         updatedDate: '25/12/2001',	
	// 	},	
    //     {
	// 		name: 'Maths',
    //         updatedDate: '25/12/2001',	
	// 	},	
        
        	
	// ];
    useEffect(() => {
        fetch("http://localhost:8080/api/Question", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
			},

					body: JSON.stringify({}) // body data type must match "Content-Type" header
			}).then(async function(value){
                    if(value.status ===200)
                    {
                       const data = await value.json();
                       setQuiz(data);
                    }
            })
		
    }, [])
    const [quizs,setQuiz] = useState<any>(null);
    const [profile, setProfile] = useState(false);
    const [joinroom, setJoinRoom] = useState(false);
    const [selection, setSelection] = useState(1);

    const [Playing, setPlaying] = useState<null|Question[]>(null);
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
        if(profile===true)
        {
            setProfile(false);       
        }
        if(joinroom===true)
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
    function playGame(id:string){
        fetch("http://localhost:8080/api/Question", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
			},

					body: JSON.stringify({QuestionID:id}) // body data type must match "Content-Type" header
			}).then(async function(value){
                    if(value.status ===200)
                    {
                       const data = await value.json();
                       setPlaying(data.questions as Question[]);
                    }
            })
    };
    function changeScreen(){
        if(selection ===1 )
        {
            return(<div id='HomeScreen'></div>)
        }
        else
        {
            return (<div id='SelectQuizScreen'>
                    <div className='searchBarContainer'>
                        <input type="text" placeholder="Search by topic..." id='searchBar'></input>
                    </div>
                    <div className='quizsDisplay'>
                        {quizs?quizs.map((quizname:any)=>(
                            <div key={quizname._id} className='quizContainer'>
                                 <p className='quizName'>{quizname.name}</p>
                                 <p className='quizUpdateDate'>{quizname?.updatedDate ?? "not found"}</p>
                                 <FontAwesomeIcon className='playIcon'icon={faCaretRight}size="5x"
                                 onClick={() => playGame(quizname._id)}></FontAwesomeIcon> 
                            </div>                      
                        )):null}
                    </div>                    
                </div> );
        }
    }
    if(!Playing)
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
                        onClick={(e)=>{
                            setSelection(0);
                        }}></FontAwesomeIcon>   
                        <FontAwesomeIcon className='rightIcon' icon={faHandshake}size="2x"
                        onClick={clickJoinRoom}></FontAwesomeIcon>
                        <FontAwesomeIcon className='rightIcon'icon={faUser}size="2x"
                        onClick={clickProfile}></FontAwesomeIcon>
                         
                        <FontAwesomeIcon onClick={(e)=>{
                            setSelection(1);
                        }} className='rightIcon'icon={faHome}size="2x"></FontAwesomeIcon>     
                    </div>      
                </div> 
                {changeScreen()}
                     
            </div>
        </>
    )
    
    return ( <QuizPlaying stateFunction={setPlaying} question={Playing}></QuizPlaying>)
}
export{HomePage}
