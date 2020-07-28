import React from 'react';

// import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import Navbar from './content/components/Navbar'
import { NavLink } from 'react-router-dom'
import Friends from './Friends' 
import Request from './Request'
import Profile from'./Profile'

const Main = (props) => {
    

    return (
        <div>
   
           
        <section className="mainBtnRow">
                {/* <Button className="btn" variant="primary">Profile<NavLink to="/Requests"></NavLink></Button>
                <Button className="btn" variant="primary">Request<NavLink to="/Request"></NavLink></Button>
                <Button className="btn" variant="primary">Friends<NavLink to="/Friends"></NavLink></Button>
            <div>
            {/* <Route path="/Profile" component={Profile} />
            <Route path="/Requests" component={Request} /> 
            <Route path="/Friends" component={Friends} /> 
            </div>  */}
        </section >
    
          
        <section className="mainboxouter">
            <div>
            <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
            </div>
            <div id="mainbox">
            <h2> </h2>
              <img id="mainpic" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
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
    )
}




export default Main;


