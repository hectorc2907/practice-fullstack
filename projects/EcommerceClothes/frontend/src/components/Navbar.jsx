import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink>
        <div>Home</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
