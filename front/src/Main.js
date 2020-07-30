import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Profile from './content/components/Profile'
import UserCard from './content/components/UserCard'


const Main = (props) => {
    
    
    return ( 
        <div>
            <div className="newBodyBackground">
            <section className="mainboxouter">
                <div>
                     <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
                </div>
                    <div id="mainbox">
                    <h2> </h2>
                    <UserCard />
                <div className="mainboxouter">
                    <img id="addbtn" src="https://i.imgur.com/iSV3icM.jpg" />
                </div>
                </div>
               
            </section>  
            </div>
        </div>
    )
}





export default Main;


