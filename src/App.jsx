
// // import Header, { Ask, Operation } from "./header";// // import Events from "./Events";
// // import Hooks from"./Hooks";
// // import Hide from"./Hide";
// // import App from "./App";

// // import Todo from "./Todo";

// // import User from "./User";
// import { useState } from "react";
// import Props from "./Props";

// // function App() {
//   // let userName = "Anil singh"
//   // let age = 12
//   // let email = "test@gmail.com"



// //   //obj 
// //  let userobject = {
// //   name : "Anil ",
// //   age :20,
// //   email:"tt@gmail.com"

// //  }


//   // return (
//   //   <div>
//     {/* //   <User name="Anil singh" age = "12" email = "test@gmail.com" /> */}

//     {/* <User name = {userName} age = {age} email = {email} /> */}


//     {/* <User user = {userobject}/> */}




//    {/* //array as props
//      let CollegesName=["NIET","VIT","IIT","IT"]
//  <User name  = {CollegesName[0]} />  */}




// //     </div>
// //   );
// // }



// function App() {
//   const [student,setStudent] = useState("sam");
//   return (
    
//     <div>
      
//       // visibility of comp using props
//       {student && <Props name={student}/>}
//       <button onClick={() => setStudent("Ishika")}>Update Student name </button>
//     </div>
//   );
// }


////default props
// import Defaultprops from "./Defaultprops";
// function App(){
//   return(
//     <div>
//       <h1>Props in react js ex of default Props</h1>
//       <Defaultprops/>
//     </div>
//   )
// }



//jsx with props
import Wrapper from "./wrapper";
function App(){
    return(
        <div>
            <Wrapper>
                <h1>Wrapper in props</h1>
            </Wrapper>
        </div>
    )
}
export default App;
