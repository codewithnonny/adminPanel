import React from "react";

const List = ({ status, category, name, price, stock, sku, id }) => {
  return (
    <tr>
      <td className="px-4 py-3">
        <span className="text-xs uppercase font-semibold"> {sku}...</span>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center">
          {/* <div className="relative rounded-full inline-block w-8 h-8 p-1 mr-2 md:block bg-gray-50 shadow-none">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://i.postimg.cc/ZRynchJY/Green-Leaf-Lettuce-each.jpg"
              alt="Green Leaf Lettuce"
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div> */}
          <div>
            <h2 className="text-sm font-medium">{name}</h2>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm">{category}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm font-semibold">₹ {price}</span>
      </td>
      <td className="px-4 py-3">
        <span className="text-sm">{stock}</span>
      </td>
      <td className="px-4 py-3">
        {status == "selling" ? (
          <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-100">
            Selling
          </span>
        ) : (
          <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-800">
            Sold Out
          </span>
        )}
      </td>
      <td className="px-4 py-3">
        <span className="text-sm font-semibold">discount</span>
      </td>
      <td className="px-4 py-3">
        <a className="flex justify-center text-center text-gray-400 hover:text-green-600">
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
        </a>
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

export default List;
