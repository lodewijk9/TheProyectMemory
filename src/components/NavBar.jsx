import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../components/navBar.css'

const NavBar = () => {
    return ( 
        <div id='miNavBar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src="https://static.wixstatic.com/media/2cd43b_3989316942d541b0a3237d3e82a4da62~mv2.png/v1/fill/w_320,h_225,q_90/2cd43b_3989316942d541b0a3237d3e82a4da62~mv2.png" height="50px" width="70px" alt="icono"></img>
            <Link className="navbar-brand" to="/">Memory+</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link"  to="/addNewWord">Add New Word</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
     );
}
 
export default NavBar;


