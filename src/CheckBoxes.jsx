import { useState } from "react";
function CheckBoxes(){
    const[skills , setskills] = useState([]);
    const handleSkills = (event)=>{
        console.log(event.target.value , event.target .checked);
        if(event.target .checked){

            setskills([...skills , event.target.value]);
        }else{
            setskills([...skills.filter((item)=>item !=event.target.value)]);
        }
    }
    return(
        <div>
            <h3>Select Your skills </h3>
            <input onChange={ handleSkills}type="checkbox" id = "php" value = "php"/>
            <label htmlFor="php">PHP</label>
            <br/>


             <input onChange={ handleSkills} type="checkbox" id = "js" value = "js"/>
            <label htmlFor="js">JavaScript</label>

            <br/>

             <input onChange={ handleSkills} type="checkbox" id = "python" value = "python"/>
            <label htmlFor="python">Python</label>

            <br/>
             <input onChange={ handleSkills} type="checkbox" id = "React" value = "React"/>
            <label htmlFor="React">React</label>
<h1>{skills.toString()}</h1>
        </div>
       
    )
}
export default CheckBoxes;