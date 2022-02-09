import React from "react";
import { Link } from "react-router-dom";

const SidebarList = ({ children, title, route }) => {
  return (
    <li className="relative cursor-pointer">
      <a className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {children}
        </svg>
        <Link to={route}>
          <span class="ml-4">{title}</span>
        </Link>
      </a>
    </li>
  );
};

export default SidebarList;
