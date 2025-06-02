import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a>Feisbuk</a>
      </div>
      <ul className="navbar__links">
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Usuarios</a>
        </li>
        <li>
          <a>Productos</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
