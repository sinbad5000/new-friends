import React, { useState, useEffect } from 'react';
import Axios from 'axios'
//import FriendCard from './FriendCard';
import AcceptedCard from './AcceptedCard';

const Friends = (props) => {

    let [acceptedRequests, setAcceptedRequests] = useState([])

    useEffect( () => {
        let token = localStorage.getItem("jwtToken")
        Axios.get(`${process.env.REACT_APP_API}/api/users/acceptedRequests`, {headers: {Authorization: `Bearer ${token}`}})
        .then(allAcceptedRequests => {
            console.log('these are all accepted requests', allAcceptedRequests.data)
            setAcceptedRequests(allAcceptedRequests.data)
        })
        .catch(err => console.log(err))
    }
    , [])

    const mappedAcceptedRequests = acceptedRequests.map( (request) => {
        return(
            <div key={request.friend._id}>
                <AcceptedCard friend={request.friend} user={props.user} />
            </div>
        )
    })

    return (
        <div className="newBodyBackground">
        <div>
            {mappedAcceptedRequests}
        </div>
        </div>
    );
};

export default Friends;