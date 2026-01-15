import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
function Bootstrap(){
  return(
    <div>
        
      <h1>Add Bootstrap in React Js </h1>
      <Button>OK</Button>
      <Alert variant="danger">Hello,BT installed</Alert>
    <Button onClick={()=>alert("Bootstrap Button")} varient="danger">Bootstrap Button</Button>
    <Button variant="danger">ok</Button>
    <Button variant="warning">ok</Button>
    <Button variant="success">ok</Button>
    <button>Simmple Button</button>

    </div>
  );
}
export default Bootstrap;