import React, { useEffect } from "react";
import { getAllUsers, getUserDetails } from "../redux/actions/userAction";
import { getAllOrders } from "../redux/actions/orderAction";
import { useSelector, useDispatch } from "react-redux";

const DashboardKPI = ({ title, value, children }) => {
  return (
    <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500">
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
            {children}
          </svg>
        </div>
        <div>
          <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const { users } = useSelector((state) => state.allUsers);
  const { orders } = useSelector((state) => state.allOrders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, []);
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Dashboard Overview
        </h1>
        <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <DashboardKPI title="Total Order" value={orders && orders.length}>
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </DashboardKPI>
          <DashboardKPI title="Order Pending" value="44">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </DashboardKPI>
          <DashboardKPI title="Order Processing" value="44">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </DashboardKPI>
          <DashboardKPI title="Order Delivered" value="55">
            <polyline points="20 6 9 17 4 12"></polyline>
          </DashboardKPI>
        </div>
      </div>
    </main>
  );
}
