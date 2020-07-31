import React, { useState, useEffect } from 'react';
import Axios from 'axios'
//import FriendCard from './FriendCard';
import AcceptedFriends from './AcceptedFriends';

const Friends = (props) => {

    let [allAcceptedFriends, setAllAcceptedFriends] = useState([])

    useEffect( () => {
        let token = localStorage.getItem("jwtToken")
        Axios.get(`${process.env.REACT_APP_API}/api/users/friends`, {headers: {Authorization: `Bearer ${token}`}})
        .then(allRequests => {
            console.log('these are all friends', allRequests.data)
            setAllAcceptedFriends(allRequests.data)
        })
        .catch(err => console.log(err))
    }
    , [])

    const mappedAllAcceptedFriends = allAcceptedFriends.map( (friend) => {
        return(
            <div key={friend.friend._id}>
                <AcceptedFriends friend={friend} user={props.user} />
            </div>
        )
    })

    return (
        <div className="newBodyBackground">
        <div>
            {mappedAllAcceptedFriends}
        </div>
        </div>
    );
};

export default Friends;