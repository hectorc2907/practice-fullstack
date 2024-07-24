import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={66} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
