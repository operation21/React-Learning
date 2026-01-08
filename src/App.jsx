import { useState }  from "react";
function App() {
  const [name , setName]= useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");
  return(
  <div>
    <h1>Controller Component</h1>
    {/* <form action="" method=""> */}
      <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
      <br/>
      <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" />
      <br/>
      <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
      <br/>
      <button>Submit</button>
      <button onClick={()=>{setName(""); setPassword(""); setEmail("");}}>Clear</button>
      <h1>{name}</h1>
      <h1>{password}</h1>
      <h1>{email}</h1>
    {/* </form> */}
  </div>
)
    
 
}

export default App;
