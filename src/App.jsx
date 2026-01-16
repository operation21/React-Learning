import Functionasprops from "./Functionasprops";

function App() {
  const displayName = () => {
    alert("hi");
  };

  return (
    <div>
      <h1>Function as props</h1>
      <Functionasprops displayName={displayName} />
    </div>
  );
}

export default App;
