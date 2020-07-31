import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import UserCard from './UserCard'


const Main = (props) => {

    let [allUsersArray, setAllUsersArray] = useState([])

    handleClick = () => {
        
        Axios.post(`${process.env.REACT_APP_API}/api/users/friendRequests`, )
    }

    useEffect( () => {
        Axios.get(`${process.env.REACT_APP_API}/api/users/`)
        .then(allUsers => {
            console.log('these are all the users', allUsers.data)
            setAllUsersArray(allUsers.data)
        })
        .catch(err => console.log(err))
    }
    , [])


    const mappedUsers = allUsersArray.map( (user) => {
        return (
            <div key={user._id}> 
                <UserCard user={ user } />
                <button>
                    
                </button>
            </div>
        )
    })

    return ( 
       
        <div className="newBodyBackground">
            <section className="mainboxouter">
                <div>
                    <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
                </div>
                <div id="mainbox">
                    {mappedUsers}
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


