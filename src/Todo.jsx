function Todo(){

    function callFun(){
        alert("Function Called")
    }

    return (
        <div>
            <h1>Anil Sindhu Todos</h1>


 <ul>
    <li>Invent new Trffic Lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
    </ul>    

    <button onClick={callFun}>Click Me</button>       
        </div>
    
    )
}
export default Todo;
