import React from "react";

const CustomerList = ({ id, name, email, date }) => {
  return (
    <tr>
      <td className="px-4 py-3">
        <span className="text-xs uppercase font-semibold"> {id}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm">{date.substr(0, date.indexOf("T"))}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm font-semibold">{name}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm">{email}</span>
      </td>

      <td className="px-4 py-3">
        <div className="flex justify-end text-right">
          <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
            <p data-tip="true" data-for="edit" currentitem="false">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </p>
          </div>
          <div className="p-2 cursor-pointer text-gray-400 hover:text-red-600">
            <p data-tip="true" data-for="delete" currentitem="false">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CustomerList;
