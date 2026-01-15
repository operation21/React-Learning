import { useRef } from "react";

function Useref() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    if (!inputRef.current) return;

    inputRef.current.focus();
    inputRef.current.style.color = 'red';
    inputRef.current.placeholder = 'enter password';
  };

  const toggleHandler = () => {
    if (!inputRef.current) return;

    inputRef.current.style.display =
      inputRef.current.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div>
      <h1>Userefhooks</h1>

      <button onClick={toggleHandler}>Toggle</button>

      <input ref={inputRef} type="text" placeholder="Enter user name" />

      <button onClick={inputHandler}>Focus on input field</button>
    </div>
  );
}

export default Useref;
