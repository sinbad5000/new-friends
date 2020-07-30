import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
// import Navbar from './content/components/Navbar'
// import { NavLink } from 'react-router-dom'
// import Friends from './Friends' 
// import Request from './content/components/Request'
// import Profile from'./content/components/Profile'
// import LikeProfile from './content/components/LikeProfile'


const Main = (props) => {
    const [userArray, setUserArray] = useState([])

    useEffect(async () => {
        try {
            const allUsers = await Axios.get('localhost:3000/api/users/test');
            setUserArray(allUsers)
        } catch (error) {
            console.log('We have an Error !!!!!!', error)
        }
    }, [])

    // post to pass the data

    // map iteration 

   
        const newFriend = props.user.length > 0 
          ? props.users.map((user, i) => (
            <li key={`user-${i}`} className="user">
              {user}
            </li>
          ))
          : <li className="user">No hunters Assigned</li>
      
          
      
        // return (
        //   <div className="bounty-card">
        //     <h3>{props.name} is {props.captured ? captured : atLarge}</h3>
        //     <h5>Wanted for {props.wantedFor}</h5>
        //     <p>Bounty posted by: {props.client}</p>
        //     <p>Reward: {props.reward}</p>
        //     {props.lastSeen ? <p>{`Last seen ${props.lastSeen}`}</p> : null}
        //     {props.ship ? <p>{`Currently using ${props.ship} as transportation`}</p> : null}
      
        //     <ul>
        //       {hunterList}
        //     </ul>
        //     <DeleteButton id={props._id} refresh={props.refresh} setError={props.setError} />
        //   </div>
    //     )
    //   }














    return ( 
        <div>
            <section className="mainBtnRow">
            </section >
            <section className="mainboxouter">
                <div>
                     <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
                </div>
                    <div id="mainbox">
                    <h2> </h2>
                    <img id="mainpic" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
                        <img id="logo" src="https://i.imgur.com/i6FmYyB.jpg"/>
                        <h3>{props.blog.name}</h3>
                    <p>{props.blog.phone}</p>
                    <p>{props.blog.date}</p>  
                </div>
                <div className="mainboxouter">
                    <img id="addbtn" src="https://i.imgur.com/iSV3icM.jpg" />
                </div>
            </section>  
        </div>
    )
}




export default Main;


