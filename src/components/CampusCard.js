// import React, {useState} from 'react';
// import EditCampus from './EditCampus';
// import '../styles/CampusCard.css';
// import {Link} from 'react-router-dom';

// function CampusCard ({campus,removeCampus,handleChange,handleSubmit}){
//     const [clicked, setClicked] = useState(false);

//     let handleEdit = () =>{
//       setClicked(false);
//       handleSubmit(campus.id);
//     }
//     return(
//       <div className="campusCard">
//           <div className="campimg">
//             <img src={campus.imageUrl}></img>
//           </div>
//           <div className="anchor">
//             <Link to={`/campus/${campus.id}`}>
//                 {campus.name}
//             </Link>
//           </div>
//           <div className="edit">
//             <button onClick={() => setClicked(true)}>Edit</button>
//               {clicked? 
//                 (<div>
//                   <EditCampus campus={campus} close={() => setClicked(false)} handleChange={handleChange} submit={handleEdit}/>
//                 </div>):(<div></div>)}
//           </div>
//           <div className="remove">
//             <button onClick={() => removeCampus(campus.id)}>Remove</button>
//           </div>
//       </div>  
//     )
// }

// export default CampusCard;


import React, { useState } from 'react';
import '../styles/CampusCard.css';
import {Link} from 'react-router-dom';
import EditCampusPopUp from './EditCampusPopUp';

function CampusCard ({campus,deleteCampus,handleChange,handleSubmit}){
    const [clicked, setClicked] = useState(false);
    let handleEdit = () =>{
        setClicked(false);
        handleSubmit(campus.id);
    }
    return(
        <div className="Card">
            <div className="image">
                <img src={campus.image}></img>
            </div>
            <div className="bottom">
                <div className="top-left">
                    <Link to={`/campus/${campus.id}`}>
                        {campus.name}
                    </Link>
                </div>
                <div className="bottom-left">
                    <button onClick={() => setClicked(true)}>Edit</button>
                    {clicked? (<div>
                        <EditCampusPopUp
                        campus={campus}
                        close={() => setClicked(false)}
                        handleChange={handleChange}
                        submit={handleEdit}
                        />
                    </div>):(<div></div>)}
                </div>
                <div className="bottom-right">
                    <button onClick={()=>deleteCampus(campus.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CampusCard;