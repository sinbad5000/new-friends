import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  console.log('💥')
  console.log(props)
  let userData = props.user
    ? <div>
      <h1>Profile</h1>
      <img src={props.user.avatar} alt={props.user.name} className="mb-4" />
      <p><strong>Name:</strong> {props.user.name}</p>
      {/*<p><strong>email:</strong> {props.user.email}</p>*/}
      <p><strong>Age:</strong> {props.user.age}</p>
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