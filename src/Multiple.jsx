import {useState } from "react"
function App(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter</button>
            {
                count =0?<h1>Condition 0 </h1>
                :count ==1?<h1>condition 1</h1>
                :count ==2?<h1>condition 2</h1>
                :count ==3?<h1>condition 3</h1>
                :count ==4?<h1>condition 4</h1>
                :count ==5?<h1>condition 5</h1>
                :count ==6?<h1>condition 6</h1>
                :<h1>Other Condition </h1>
            }
        </div>
    )
}
export default App;