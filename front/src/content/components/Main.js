import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
// import Navbar from './content/components/Navbar'
// import { NavLink } from 'react-router-dom'
// import Friends from './Friends' 
// import Request from './content/components/Request'
// import Profile from'./content/components/Profile'
// import LikeProfile from './content/components/LikeProfile'
import UserCard from './UserCard'


const Main = (props) => {

    let [allUsersArray, setAllUsersArray] = useState([])

    useEffect( () => {
        Axios.get(`${process.env.REACT_APP_API}/api/users/test`)
        .then(allUsers => {
            console.log('these are all the users', allUsers.data)
            setAllUsersArray(allUsers.data)
        })
        .catch(err => console.log(err))
    }
    , [])

    const mappedUsers = allUsersArray.map( (user) => {
        return (<div key={user._id}> <UserCard user={ user } /></div>)
    })

    return ( 
       
        <div className="newBodyBackground">
            <section className="mainboxouter">
                <div>
                    <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
                </div>
                <div id="mainbox">
                    {mappedUsers}
                    <UserCard />
                     {/* <h2> </h2>
                    <img id="mainpic" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
                    <h3>{props.blog.name}</h3>
                    <p>{props.blog.phone}</p>
                    <p>{props.blog.date}</p>    */}
                    <img id="logo" src="https://i.imgur.com/i6FmYyB.jpg"/>
                </div>
                <div className="mainboxouter">
                    <img id="addbtn" src="https://i.imgur.com/iSV3icM.jpg" />
                </div>
            </section>  
        </div>
    )
}

export default Main;


