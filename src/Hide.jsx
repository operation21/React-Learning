import {useState} from "react"
function Hide (){
    const [display,setDisplay]=useState(true)
    return (
        <div>
            <h1>Toggle In React js</h1>
            {
                display? <h1>Anil Sindhu</h1>:null
            }
           <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default Hide;
