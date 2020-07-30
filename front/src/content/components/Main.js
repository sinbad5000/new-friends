import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import UserCard from './UserCard'
import Lonely from "./Lonely"


const Main = (props) => {
    let [allUsersArray, setAllUsersArray] = useState([])

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API}/api/users/test`)
            .then(allUsers => {
                setAllUsersArray(allUsers.data)
            })
            .catch(err => console.log(err))
    }
        , [])

    const mappedUsers = allUsersArray.map((user) => {
        return (
            <div key={user._id}>
                <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg" />
                <UserCard user={user} />
                <img id="addbtn" src="https://i.imgur.com/iSV3icM.jpg" />
            </div>)
    })

    return (
        <div   >
            <div >

                {allUsersArray[0] ? (

                    <div className="newBodyBackground">
                        <section className="mainboxouter">

                            {mappedUsers}

                        </section>
                    </div>
                ) : (
                        <Lonely />
                    )}
            </div>
        </div>
    )
}

export default Main