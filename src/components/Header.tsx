import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to="/">Star Wars App</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
