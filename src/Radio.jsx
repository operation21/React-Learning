
import { useState } from "react";
function Radio(){
    const[gender , setGender] = useState("");


    return (
        <div>
            <h1>Radio button </h1>
            {/* <input type ="radio" onChange={(event)=>setGender(event.target.value)} value = "male"name ="gender" id="male"/>
            <label htmlFor="male">Male</label> */}


             <input type="radio" onChange={(event)=>setGender(event.target.value)}  name = "gender" value ={"male"} checked={gender === "male"} id = "male" />
    <label htmlFor="male">Male</label>
            <br/>
            <input type ="radio" onChange={(event)=>setGender(event.target.value)} value = {"female"} name ="gender"checked={gender === "female"} id="female"/>
            <label htmlFor="female">Female</label>
            <br/>
            <input type ="radio" onChange={(event)=>setGender(event.target.value)} value = {"other"} name ="gender" checked={gender === "other"} id="other"/>
            <label htmlFor="other">Other</label>
            <br/>
           
            <button onClick={() => setGender("")}>Clear</button>
          <h1>Selected Gender: {gender}</h1>
        </div>
    )
}

export default Radio;