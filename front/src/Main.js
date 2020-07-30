import React from 'react';

const Main = (props) => {

    // let [allUsersArray, setAllUsersArray] = useState([])
    
    // useEffect(async () => {
    //     try {
    //         const allUsers = await Axios.get('localhost:3000/api/users/test');
    //         setUserArray(allUsers)
    //     } catch (error) {
    //         console.log('We have an Error !!!!!!', error)
    //     }
    // }, [])

    return ( 

        <div>
   
           
        <section className="mainBtnRow">
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


