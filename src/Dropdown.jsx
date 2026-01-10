
import { useState } from "react";
function Dropdown(){
    const [city , setCity] = useState("Delhi");
    return (
        <div>
            <h1>Dropdown</h1>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value = "Noida">Noida</option>
                <option value = "Delhi">Delhi</option>
                <option value = "kashi">Kashi</option>
                <option value = "Pune">Pune</option>
                
            </select>


        </div>
    )
}

export default Dropdown;