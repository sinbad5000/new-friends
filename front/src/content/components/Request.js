
import React from 'react';
import UserCard from './UserCard';

// import LikeProfile from './content/components/LikeProfile'


const Request = (props) => {



    return (
        <div className="newBodyBackground">
        <div>
            <section className="mainboxouter">  
            <div>
            <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
            </div>
            <div id="mainbox">
            <UserCard />
              {/* <img id="mainpic" src={`${props.blog.imgUrl}`} alt="face of a person" />  */}
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
        </div>
    );
}; 
 
export default Request;