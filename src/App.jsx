import { useState } from "react";
// import Dropdown from "./Dropdown";
// import Radio from "./Radio";

import Checked from "./checked";


function App() {
  // const [ gender , setGender]=useState("female");
  // const [city, setCity]=useState("Noida");

  return(

  <div>
{/*    
    <h1>Handle rADIO AND DROPDOWN</h1>
    <h4>Select Gender</h4>
    <input type="radio" onChange={(event)=>setGender(event.target.value)}  name = "gender" value ={"male"} id = "male" />
    <label htmlFor="male">Male</label>
    <input type="radio" onChange={(event)=>setGender(event.target.value)}  name = "gender" value ={"female"} id = "female" />
    <label htmlFor="female">Female</label>
    <h2>Selected Gender : {gender}</h2>
    <br/>

      <h4>Select City</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Noida"}>
        <option value = "Noida">Noida</option>
        <option value = "Delhi">Delhi</option>
        <option value = "Mumbai">Mumbai</option>
      </select>
      <h2>Selected City : {city}</h2> */}

{/* 
      <Dropdown /> */}
      {/* <Radio /> */}
      <Checked/>
  </div>
);
}

export default App;
