import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Test() {

const [allUsersData, setAllUsersData] = useState({})

//hit a profile route
//this means creating a profile route in the backend
//


  useEffect(() => {
    let token
    axios.get(process.env.REACT_APP_API + 'api/users/test')
    .then ( response => {
      console.log(response)
      setAllUsersData(response.json())
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      test page
    </div>
  )
}

export default Test



router.get("/test/profile", function (req, res) {
  User.findOne({'_id': o_id})
     .then( results => {
      res.json(results)
      console.log('It worked!')
  }).catch( err => {
      console.log(err)
  })
})
var mongo = require('mongodb');
var o_id = new mongo.ObjectId("5f1f13841c014ffa2f0067ec");