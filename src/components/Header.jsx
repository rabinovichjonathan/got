import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import useThrones from '../hooks/useThrones';




const Header = () => {
    
    const { datoBusqueda, handleBuscarClick } = useThrones()
    
    return(
       <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/listado">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Login</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                
                </ul>
            </div>
           
        </nav>
        <div className="d-flex justify-content-center mt-5 mb-5">
                <h4>Catálogo de personajes de Game of thrones</h4>
        </div>
        
        <div className="input-group d-flex justify-content-end mt-5 mb-5">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control"  onChange ={datoBusqueda} placeholder='Buscar por id'/>
                
            </div>
            <button type="button" className="btn btn-primary" onClick={handleBuscarClick}>
                <i className="bi bi-search"></i>
            </button>
        </div> 
       </>
       
        
        
    )
    
    
}

export default Header