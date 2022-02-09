import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../Components/List";
import { getAdminProduct } from "../redux/actions/productAction";

const Table = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const fetchProduct = async () => {
    dispatch(getAdminProduct());
  };

  React.useEffect(() => {
    fetchProduct();
  }, []);
  // console.log(product[0].category.name);
  return (
    <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 mb-8 rounded-b-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
            <tr>
              <td class="px-4 py-3">SKU</td>
              <td class="px-4 py-3">Product name</td>
              <td class="px-4 py-3">Category</td>
              <td class="px-4 py-3">Price</td>
              <td class="px-4 py-3">Stock</td>
              <td class="px-4 py-3">Status</td>
              <td class="px-4 py-3">Discount</td>
              <td class="px-4 py-3">Details</td>

              <td class="px-4 py-3 text-right">Actions</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            {products &&
              products.map((item) => {
                // console.log(item);
                return (
                  <List
                    key={item._id}
                    status={item.Stock ? "selling" : ""}
                    category={item.category ? item.category.name : ""}
                    name={item.name}
                    price={item.price}
                    stock={item.Stock}
                    sku={item._id.substr(0, 10)}
                    id=""
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
        <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
          <span class="flex items-center font-semibold tracking-wide uppercase">
            Total Product {products.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
