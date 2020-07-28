import React from 'react';


const Request = (props) => {
    return (
        <div>
            <section className="mainboxouter">  
            <div>
            <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg"  />  
            </div>
            <div id="mainbox">
            <h2>Friend Request ...be my friend !  </h2>
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
    );
};

export default Request;