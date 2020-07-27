import React, {useState, useEffect} from 'react';
import Signup from './content/components/Signup'

const welcome = () => {
    return (
        <div>
            <h1>
                <img src="https://i.imgur.com/DfR7vek.jpg" alt="many colors art style logo with 4 heads"/>
            Authentication goes here ! 
            </h1>
            <Signup />
            
        </div>
    );
};



export default welcome;







