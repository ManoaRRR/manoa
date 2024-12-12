import { useState } from "react";
import { NavLink } from "react-router-dom";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-black shadow-lg sticky top-0 p-4 z-50">
  <div className="container mx-auto flex items-center justify-between">
    {/* Logo ou Titre */}
    <h1 className="text-2xl font-bold text-white flex items-center space-x-2">
      <span className="bg-white text-black rounded-full p-2">
        <FontAwesomeIcon icon={faLaptopCode} />
      </span>
      <span>Manoa Aro Ny Avo</span>
    </h1>

    {/* Bouton Menu Hamburger (visible sur les petits écrans) */}
    <button
      className="text-white md:hidden focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>

    {/* Menu de navigation */}
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden"
      } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent backdrop-blur-3xl rounded-b-lg md:rounded-none z-40`}
    >
      <ul className="flex flex-col md:flex-row items-center md:space-x-8 p-4 md:p-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-xl"
                : "text-white text-xl hover:text-gray-300 transition duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-xl"
                : "text-white text-xl hover:text-gray-300 transition duration-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stacks"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-xl"
                : "text-white text-xl hover:text-gray-300 transition duration-300"
            }
          >
            Technos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-xl"
                : "text-white text-xl hover:text-gray-300 transition duration-300"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
</header>


  );
}
