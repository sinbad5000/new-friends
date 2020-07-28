import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Profile'
import Welcome from './Welcome'
import Main from './Main'
import Request from './Request'
import Friends from './Friends' 
import Navbar from './content/components/Navbar'


function App() {


  const data = {
          imgUrl: "http://placekitten.com/300/200", 
          name: "Luke Myers! " ,
          phone:"Looking for friends that like computers. I am a new software engineer and like friends that can code !",
          date: "July 17th, 2020",
  }

  return (
    <Router>
      <div>
        <nav>
          {/* <Link to="/">Welcome </Link>
          <Link to="/Main">Main</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Requests">Request</Link> */}
          <Link to="/Friends">Friends</Link> 
          <Navbar />
        </nav> 
      </div>
      <div className="App">
        <Route exact path="/" component={Welcome} />
        {/* <Route path="/Main" component={Main} /> */}
        <Route path="/Profile" component={Profile} />
        <Route path="/Main" render={() => <Main blog={data} />} />  
        <Route path="/Requests" component={Request} /> 
        <Route path="/Friends" render={() => <Friends blog={data} />} /> 
      </div>
    </Router>
  );
}

export default App;