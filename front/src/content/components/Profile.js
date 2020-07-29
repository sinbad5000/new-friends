import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
  console.log('💥')
  console.log(props)
  console.log(props.user, "user data in profile")
  
  let [allUsersData, setAllUsersData] = useState("")

  useEffect(() => {
    let token = localStorage.getItem("jwtToken")
    console.log(token, "heloooooooo") 
     axios.get(`${process.env.REACT_APP_API}/api/users/profile`, {headers: {Authorization: `Bearer ${token}`}})
    .then ( response => {
      console.log(response)
      setAllUsersData(response.json())
    }).catch(err => console.log(err)) 
  }, [])
  
  let userData = props.user
    ? <div>
      <h1>Profile</h1>
      <img src={props.user.avatar} alt={props.user.name} className="mb-4" />
      <p><strong>Name:</strong> {props.user.name}</p>
      {/*<p><strong>email:</strong> {props.user.email}</p>*/}
      <p><strong>Age:</strong> {props.user.age}</p>
      <p><strong>location:</strong> {props.user.location}</p>
      <p><strong>about:</strong> {props.user.about}</p>
      <p><strong>languages:</strong> {props.user.languages}</p>
      <p><strong>smoke:</strong> {props.user.smoke}</p>
      <p><strong>drink:</strong> {props.user.drink}</p>
      <p><strong>category:</strong> {props.user.category}</p>
    </div>
    : <h4>Loading...</h4>

  let errorDiv = () => {
    return (
      <div className="text-center pt-4"><h3>Please <Link to='/Login'>login</Link> to view this page</h3></div>
    )
  }

  return (
    <div>
      <div>
        {props.user ? userData : errorDiv()}
      </div>
      <div>
        <form>

        </form>
      </div>
    </div>
  )
}

export default Profile;