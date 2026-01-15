import { useState } from "react";
function Inlinecss() {
  const[cardStyle, setCardStyle]=useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px"
  }
)
const [grid, setGrid]=useState(true)

const updateTheme=(bgColor,textColor)=>{
  setCardStyle({...cardStyle,backgroundColor:bgColor})


}

  return (
    <div>
      <h1 style={{ color: "red" }}>Inline Style in React Js</h1>
      <button onClick={()=>updateTheme('gray','green')}>Grey Theme </button>
       <button onClick={()=>updateTheme('white','black')}>Default Theme </button>
       <button onClick={()=>setGrid(!grid)}>ToggleGrid</button>

      <div style={{ display: grid?'flex':'block' ,flexWrap:"wrap"}}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://freesvg.org/img/Faceless-Male-Avatar-In-Suit-2.png"
            alt=""
            srcSet=""
          />

          <h4 style={{ padding: "9px" }}>Anil Sidhu</h4>
          <p style={{ padding: "9px" }}>Software developer</p>
        </div>
      </div>
    </div>
  );
}

export default Inlinecss;
