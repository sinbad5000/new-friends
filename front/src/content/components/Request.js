
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';


// import LikeProfile from './content/components/LikeProfile'


const Request = (props) => {

   let [friendRequests, setFriendsRequests] = useState([])

    useEffect(() => {
        let token = localStorage.getItem("jwtToken")
        console.log(token, "jwtToken") 

        axios.get(`${process.env.REACT_APP_API}/api/users/friendRequests/`, {headers: {Authorization: `Bearer ${token}`}})
        .then ( allRequests => {
            console.log("here is the friendrequest route data", allRequests.data)
        }).catch(err => console.log(err))
    }, [])

    // const mappedFriendsRequests = friendsRequests.map( (request) => {
    //     return (
    //         <div key={request.friend._id}>
    //             {request.friend.name}
    //         </div>
    //     )
    // })
    return (
        <div className="newBodyBackground">
        <div>
            <section className="mainboxouter">  
            <div>
            <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
            </div>
            <div id="mainbox">
            <UserCard />
              {/* <img id="mainpic" src={`${props.blog.imgUrl}`} alt="face of a person" />  */}
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
        </div>
    );
}; 
 
export default Request;