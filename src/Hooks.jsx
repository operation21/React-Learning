import { useState } from "react"

const Counter= ()=>{
const [Count,setCount] =useState(0);
const [Rcount,setRcount]=useState(0);
return(
    <div>
        <h1>Counter :{Count}</h1>
        <h1>R Counter :{Rcount}</h1>

        <button onClick={()=>setCount(Count+1)}>Update Counter</button>
        <button onClick={()=>setRcount(Rcount-1)}>Update Rcounter</button>
    </div>
)

} 
export default Counter;