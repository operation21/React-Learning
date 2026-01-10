import Nestedloop from "./Nestedloop";

function App() {
  const collegeData = [
    {
      name: "IET ALWAR",
      city: "alwar",
      website: "www.iet.com",
      student: [
        { name: "Rahul", age: 21, email: "rahul@gmail.com" },
        { name: "Anita", age: 29, email: "anital@gmail.com" },
        { name: "Ria", age: 27, email: "ria@gmail.com" }
      ]
    },
    {
      name: "NIET NOIDA",
      city: "NOIDA",
      website: "www.niet.com",
      student: [
        { name: "Rahul", age: 21, email: "rahul@gmail.com" },
        { name: "Anita", age: 29, email: "anital@gmail.com" },
        { name: "Ria", age: 27, email: "ria@gmail.com" }
      ]
    },
    {
      name: "IET ALWAR",
      city: "alwar",
      website: "www.iet.com",
      student: [
        { name: "Rahul", age: 21, email: "rahul@gmail.com" },
        { name: "Anita", age: 29, email: "anital@gmail.com" },
        { name: "Ria", age: 27, email: "ria@gmail.com" }
      ]
    }
  ];

  return (
    <div>
      {/* <h1>Nested looping with comp</h1> */}
     {
      collegeData.map((college,index)=>(
        <div Key={index}>
          <Nestedloop college = {college}/>
      </div>
      ))
     }

    </div>
  );
}

export default App;
