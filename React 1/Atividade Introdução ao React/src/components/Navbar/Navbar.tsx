import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <nav className="navlink">
        <NavLink to="/conquista">Conquistas</NavLink>
        <NavLink to="/mercado">Mercado</NavLink>
        <NavLink to="/tarefa">Tarefas</NavLink>
      </nav>
      <h1 className="flex">React Router</h1>
    </div>
  );
}

export default Navbar;
