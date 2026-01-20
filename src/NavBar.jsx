import {Link} from "react-router"
import'./header.css'
function NavBar(){
    return(
        <div className="header">
        <div>
            <Link className="link"><h1>Logo</h1></Link>
        </div>
<div>
    <ul>
        <li>
            <Link className="link" to="/"><h2>Home</h2></Link>
        </li>
        <li>
            <Link className="link" to="/logIn"><h2>Contact</h2></Link>
        </li>
        <li>
            <Link className="link" to="/About"><h2>About</h2></Link>
        </li>
    </ul>
</div>

        </div>

    );
}
export default NavBar;




