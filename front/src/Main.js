import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
// import Navbar from './content/components/Navbar'
// import { NavLink } from 'react-router-dom'
// import Friends from './Friends' 
// import Request from './content/components/Request'
import Profile from './content/components/Profile'


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
                    <Profile />
                <div className="mainboxouter">
                    <img id="addbtn" src="https://i.imgur.com/iSV3icM.jpg" />
                </div>
            </section>  
        </div>
    )
}




export default Main;


