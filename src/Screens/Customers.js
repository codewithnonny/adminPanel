import React from "react";
import CustomerTable from "../Components/CustomerTable";

export const Customers = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Orders
        </h1>
        <div className="rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs mb-5">
          <div className="p-4">
            <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent focus:bg-white"
                  type="search"
                  name="search"
                  placeholder="Search by product name"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-1"
                ></button>
              </div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent focus:bg-white">
                  <option value="All" hidden="">
                    Category
                  </option>
                  <option value="1">1</option>
                </select>
              </div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent focus:bg-white">
                  <option value="All" hidden="">
                    Price
                  </option>
                  <option value="Low">Low to High</option>
                  <option value="High">High to Low</option>
                </select>
              </div>
              <div className="w-full md:w-56 lg:w-56 xl:w-56">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-red-500 border border-transparent active:bg-red-600 hover:bg-red-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12"
                  type="button"
                  onClick={() => {}}
                >
                  <span className="mr-3">
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
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
        <CustomerTable />
      </div>
    </main>
  );
};
