import { useEffect,useState } from "react";
import './Api.css';
function App() {
  const [usersData,setUserData]=useState([]);

  useEffect (()=>{
    getUserdata();

  },[])
 
 
  async function getUserdata(){
    const url ="https://dummyjson.com/user";
    let response =await fetch (url);
    response = await response.json()
    
    setUserData(response.users);


  }
  console.log(usersData);
return(
 <div>
    
<h1>Fetch Data from Get Api</h1>
{
  usersData && usersData.map((user)=>{
    return(
   <ul className="user-list">
   
   <li> {user.firstName}</li>
    <li>{user.lastName}</li>
    <li>{user.age}</li>
    <li>{user.email}</li>

   </ul>
    )

  })
}
 </div>
);
}

export default App;
