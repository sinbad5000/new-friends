import React from 'react';
// import Button from 'react-bootstrap/Button';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Friends from './Friends' 
import Request from './content/components/Request'
import Profile from'./content/components/Profile'

const Main = (props) => {
    

    return (
        <div>
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


