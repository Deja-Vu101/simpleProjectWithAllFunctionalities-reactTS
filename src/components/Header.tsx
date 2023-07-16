import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav_menu">
        <ul className="nav_list">
          <li>
            <Link to={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"/todos"}>Todos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
