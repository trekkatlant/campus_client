  
import React from 'react';

function EditCamp ({close,submit,handleChange,campus}){
  return (
    <div className='edit'>
        <h1>{campus.name}</h1>
            <div className="editfield">
                <form onSubmit={submit}>
                    Campus Name: <br></br>
                    <input type="text" name="campusname" onChange={handleChange("name")} value={campus.name}></input> 
             
                    Campus Description: <br></br>
                    <input type="text" name="campdescr" onChange={handleChange("description")} value={campus.description}></input>
            
                    Campus Address: <br></br>
                    <input type ="text" name="campaddr" onChange={handleChange("address")} value={campus.address}></input>
            
                    <div className="submitbutton">
                        <button type="submit" value="submit">Submit</button>
                        <button onClick={close}>Close</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default EditCamp;