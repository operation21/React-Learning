function Header() {
  return (
    <div>
      <h1>Hello Ishika 💙</h1>
    </div>
  );
}

export function Ask(){
    return (
        <div>
            <h2>How r uh </h2>
            
<h1>{operation(20,10,"+")}</h1>
           
        </div>
    );
}
export function operation(a,b,op){
  if(op=="+"){
    return a+b;
  }else if(op=="-"){
    return a-b;
  }else{
    return a+b

  }
}


export default Header;
