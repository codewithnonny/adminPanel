import React from "react";
import CategoryList from "../Components/CategoryList";
import axios from "axios";

const Table = () => {
  const [category, setCategory] = React.useState([]);

  const fetchCategory = async () => {
    const data = await axios("http://localhost:4001/api/v1/getAllCategory", {
      withCredentials: true,
    });

    setCategory(data.data.categories);
  };

  React.useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 mb-8 rounded-b-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
            <tr>
              <td class="px-4 py-3">ID</td>
              <td class="px-4 py-3">Category name</td>

              {/* <td class="px-4 py-3">Details</td> */}

              <td class="px-4 py-3 text-right">Actions</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            {category.map((item) => {
              return <CategoryList name={item.parentCategory} id={item._id} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
        <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
          <span class="flex items-center font-semibold tracking-wide uppercase">
            Total Product {category.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
