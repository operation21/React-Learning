import styled from "styled-components";
function App() {
  const Heading=styled.h1`
  color:red;
  border:1px solid green;
  border radius:20px;
  padding:20px
  `

  const StyleBtn=styled.button`
  color:red;
  width:130px
  height:40px;
  margin:20px
  `
  return(
    <div>
     
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
     <StyleBtn>Login</StyleBtn>
      <StyleBtn>Signup</StyleBtn>
       <StyleBtn>Logout</StyleBtn>
        <StyleBtn>Delete</StyleBtn>
    </div>
  );

}
export default App;

// benifit not just give every h1 have diff style just use one defined pre