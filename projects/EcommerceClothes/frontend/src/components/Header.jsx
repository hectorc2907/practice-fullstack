import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
