import React from "react";
import { useSelector } from "react-redux";
import CustomerList from "../Components/CustomerList";

const Table = () => {
  const { users, loading } = useSelector((state) => state.allUsers);

  React.useEffect(() => {}, []);
  console.log(users);
  return (
    <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 mb-8 rounded-b-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
            <tr>
              <td class="px-4 py-3">ID</td>
              <td class="px-4 py-3">Joining Date</td>
              <td class="px-4 py-3">Name</td>
              <td class="px-4 py-3">Email</td>
              <td class="px-4 py-3 text-right">Actions</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            {users &&
              users.map((item) => {
                return (
                  <CustomerList
                    id={item._id}
                    date={item.createdAt}
                    name={item.name}
                    email={item.email}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
        <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
          <span class="flex items-center font-semibold tracking-wide uppercase">
            Total Product {users.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
