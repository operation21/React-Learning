
import { useState } from "react";
function Checked(){
    const [ checkbox , setCheckbox ]=useState([]);
    
  const handleChange = (event) => {  
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setCheckbox([...checkbox, value]);
    } else {
      setCheckbox(checkbox.filter(item => item !== value));
    }
  };
        return(
        <div>
            <h1>select your skill</h1>
            <input type="checkbox" onChange={handleChange} value="Java" id="java" /> Java<br/>
            <input type="checkbox" onChange={handleChange} value="Python" id="python" /> Python<br/>
            <input type="checkbox" onChange={handleChange} value="C++" id="c++" /> C++<br/>
            <input type="checkbox" onChange={handleChange} value="PHP" id="php" /> PHP<br/>


            <h4>Checkbox value:{checkbox}</h4>
        </div>
    );
}

export default Checked;


