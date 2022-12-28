/* IMPORTACIONES */

//Modulos
//Estilos
import './NavBar.css'
//Componentes
//Core

/* LOGICA */
const NavBar = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MaesDrink</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">Promos</a>
      </div>
    </div>
  </div>
</nav>
        </header>
    )
}
/* EXPORTACION */

export default NavBar