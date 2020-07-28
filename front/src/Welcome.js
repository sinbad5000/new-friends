import React, {useState, useEffect} from 'react';
import Signup from './content/components/Signup'
import Login from './content/components/Login'


const welcome = () => {
    return (
        <div id="welcome">
                    <header id="welcomeHeader">
                        {/* <h1>New Friends</h1> */}
                        <Login />
                    </header> 
                  <div id="signup">
                        <Signup />

                            <img id="welcomepic" src="https://i.imgur.com/DfR7vek.jpg" alt=" color heads"/>

                        </div>
            
            </div>  
        
        
    );
}




export default welcome;




