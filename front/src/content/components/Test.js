import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Test() {

const [allUsersData, setAllUsersData] = useState({})

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