import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 m-auto mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
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
