import { useState, useEffect } from "react";

function Useeffect() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Hello Ishika");
  }, []); // runs once when component mounts

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Useeffect;
