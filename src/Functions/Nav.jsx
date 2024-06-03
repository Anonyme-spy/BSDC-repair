import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex-end" id="hide">
      <ul
        className="flex flex-col font-medium mt-4 mr-16 rounded-lg bg-gray-50 md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <NavLink to="/"
                   className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                   aria-current="page" style={({ isActive }) => {
            return isActive ? { color: "#3b71f7" } : { color: "white" };
          }
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/services"} style={({ isActive }) => {
            return isActive ? { color: "#3b71f7" } : { color: "white" };
          }
          }
                   className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >Services</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={({ isActive }) => {
            return isActive ? { color: "#3b71f7" } : { color: "white" };
          }
          }
                   className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About
            Us</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} style={({ isActive }) => {
            return isActive ? { color: "#3b71f7" } : { color: "white" };
          }
          }
                   className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}