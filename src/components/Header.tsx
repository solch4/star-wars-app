import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Star Wars App</Link>
      </h1>
    </header>
  );
};

export default Header;
