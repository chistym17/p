/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4  sm:text-xl rounded md:p-0 text-white hover:text-gray-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;