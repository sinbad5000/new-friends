import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import './App.css';
import Profile from './Profile'
import Welcome from './Welcome'
import Main from './Main'
import Request from './Request'
import Friends from './Friends'

function App() {




  const data = {
          imgUrl: "http://placekitten.com/300/200", 
          name: "This is a great website ! " ,
          phone:"This is some content for the blog and we really like it. Please like or share us on Facebook and Instagram",
          date: "July 17th, 2020",
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Welcome </Link>
          <Link to="/Main">Main</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Requests">Request</Link>
          <Link to="/Friends">Friends</Link>
        </nav>
      </div>
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route path="/Main" component={Main} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Main" render={() => <Main picture={data} />} />  
        <Route path="/Requests" component={Request} /> 
        <Route path="/Friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;