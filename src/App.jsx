import Reusecomp from "./Reusecomp";

function App() {
  const userData = [
    {
      name: "Anila Sindhu",
      age: "22",
      Email: "anil@gmail.com",
      id: 1
    },
    {
      name: "Sindhu ji",
      age: "23",
      Email: "sindhu@gmail.com",
      id: 2
    },
    {
      name: "shivi",
      age: "24",
      Email: "shivi@gmail.com",
      id: 3
    },
    {
      name: "tanu",
      age: "25",
      Email: "tanu@gmail.com",
      id: 4
    }
  ];

  return (
    <div>
      <h1>Reuse Comp in loop</h1>

      {userData.map((user) => (
        <h4 key={user.id}>
          <Reusecomp data ={user}/>
        </h4>
      ))}
    </div>
  );
}

export default App;

