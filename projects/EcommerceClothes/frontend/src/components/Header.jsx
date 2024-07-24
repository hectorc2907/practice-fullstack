import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 m-auto mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-">
      <div>
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={66} />
          </Link>
        </div>
        <Navbar />
        <div>buttons</div>
      </div>
    </header>
  );
};

export default Header;
