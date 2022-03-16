const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
                <a className="navbar-brand" href="/">Memory+</a>
              
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/nueva-palabra">AGREGAR PALABRAS</a>
                    </li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavBar;