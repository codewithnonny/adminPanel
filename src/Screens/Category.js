import React from "react";

import CategoryTables from "../Components/CategoryTable";

import AddCategory from "../Components/AddCategory";

export const Category = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Category
        </h1>
        <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 shadow-xs mb-5">
          <div className="p-4">
            <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div>
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent focus:bg-white"
                  type="search"
                  placeholder="Search by phone"
                />
              </div>
              <div>
                <select class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent focus:bg-white">
                  <option value="Status" hidden="">
                    Status
                  </option>
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Cancel">Cancel</option>
                </select>
              </div>
              <div>
                <select class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent focus:bg-white">
                  <option value="Order limits" hidden="">
                    Order limits
                  </option>
                  <option value="5">Last 5 days orders</option>
                  <option value="7">Last 7 days orders</option>
                  <option value="15">Last 15 days orders</option>
                  <option value="30">Last 30 days orders</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <CategoryTables />
      </div>
      {/* <AddCategory /> */}
    </main>
  );
};
