import React from "react";
import { Link } from "react-router-dom";

const OrderList = ({ date, id, status, amount, user, state, paymentInfo }) => {
  return (
    <tr>
      <td className="px-4 py-3">
        <span className="text-xs uppercase font-semibold"> {id}</span>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center">
          <div>
            <h2 className="text-sm font-medium">
              {date.substr(0, date.indexOf("T"))}
            </h2>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm">{state}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm font-semibold">₹ {amount}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm">{paymentInfo}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm font-semibold">{user}</span>
      </td>
      <td className="px-4 py-3">
        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-100">
          {status}
        </span>
      </td>

      <td class="px-4 py-3 text-center">
        <select class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border bg-gray-50 h-8">
          <option value="Status" hidden="">
            Status
          </option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Cancel">Cancel</option>
        </select>
      </td>
      <td className="px-4 py-3">
        <Link
          to="/invoice"
          className="flex justify-center text-center text-gray-400 hover:text-green-600"
        >
          <p data-tip="true" data-for="details" currentitem="false">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </p>
        </Link>
      </td>
    </tr>
  );
};

export default OrderList;
