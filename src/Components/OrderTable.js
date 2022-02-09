import React from "react";
import { useSelector } from "react-redux";
import OrderList from "../Components/OrderList";

const Table = () => {
  const { loading, orders } = useSelector((state) => state.allOrders);

  console.log(orders);
  return (
    <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 mb-8 rounded-b-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
            <tr>
              <td class="px-4 py-3">Order ID</td>
              <td class="px-4 py-3">Date</td>
              <td class="px-4 py-3">State</td>
              <td class="px-4 py-3">Amount</td>
              <td class="px-4 py-3">Method</td>
              <td class="px-4 py-3">User</td>
              <td class="px-4 py-3">Status</td>
              <td class="px-4 py-3">Action</td>
              <td class="px-4 py-3">Invoice</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            {orders.map((item) => {
              return (
                <OrderList
                  date={item.createdAt}
                  status={item.orderStatus}
                  amount={item.amount}
                  id={item._id}
                  paymentInfo={
                    item.paymentInfo ? item.paymentInfo.status : "Pickup"
                  }
                  user={item.user}
                  state={item.shippingInfo ? item.shippingInfo.state : "UP"}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
        <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
          <span class="flex items-center font-semibold tracking-wide uppercase">
            Total orders {orders.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
