function Events() {

  function callFun() {
    alert("hello Function");
  }
    
  const fruits = ()=>{
    alert("apple")
  }
  return (
    <div>
      <h1>Functions and Events</h1>
      <button onClick={fruits}>Submit</button>
    </div>
  );
}

export default Events;
