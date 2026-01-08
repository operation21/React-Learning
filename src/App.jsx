
import { useState } from "react";


function App() {
  const [val,setVal]=useState("Anil sindhu")
  return (
    <div>
      <h1>Input field</h1>

      {/* <input type="text" onChange={(event)=>alert(event.target.value)} placeholder="Enter your name" /> */}
       <input type="text" value = {val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter your name" />
      <br />

    <h1>{val}</h1>
    <button onClick={()=>setVal("")}>Clear Value</button>
    </div>
  );
}

export default App;
