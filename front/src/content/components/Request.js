
import React from 'react';

// import LikeProfile from './content/components/LikeProfile'

// Code to add Friend HERE from onlick of the + BUTTON 

const Request = (props) => {


    // const [faves, setFaves]  = useState([]);
    // const [filter, setFilter] = useState('all');
  
    // const handleFilterClick = filter => {
    //   setFilter(filter)

  
    // }
  

    // const onFaveToggle = () => {
    //   let newFaves = [...faves];
    //   let faveIndex = faves.indexOf(film);
    //   //check is a film is i the faves
    //   if (faveIndex >= 0) {
    //     newFaves.splice(faveIndex, 1);
    //   } else {
    //     //else put in array
    //     newFaves =  [...newFaves, film];
    //   }
    //    set faves (newFaves)

  
    // }
  

// -------------------------------------------------------------


    return (
        <div className="newBodyBackground">
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


             


/*              <img id="addbtn" src="https://i.imgur.com/iSV3icM.jpg" />
             </div>
             </section>
</div>
        </div>
    );
}; 
 
export default Request;