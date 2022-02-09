import React from "react";
import axios from "axios";

const AddProduct = ({ hide }) => {
  const [hidden, sethide] = React.useState(false);
  const [categoryData, setCategoryData] = React.useState({
    name: "",
  });

  React.useEffect(() => {
    sethide(hide);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    await axios
      .post("http://localhost:8000/category/create", categoryData)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    switch (name) {
      case "title":
        setCategoryData({ ...categoryData, name: value });
        break;

      default:
        break;
    }
    console.log(categoryData);
  };

  return (
    <div tabIndex="-1" className="drawer drawer-right">
      <div className="drawer-mask"></div>
      <div className="drawer-content-wrapper">
        <div className="drawer-content">
          <button className="absolute focus:outline-none z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {/* product */}
          <div className="flex flex-col w-full h-full justify-between">
            <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <div>
                <h4 className="text-xl font-medium">Add Category</h4>
                <p className="mb-0 text-sm">
                  Add your Category and necessary information from here
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0px",
                  overflow: "scroll",
                  marginRight: "-15px",
                  marginBottom: "-15px",
                }}
              >
                <form className="block" onSubmit={handleSubmit}>
                  <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Category Title/Name
                      </label>
                      <div className="col-span-8 sm:col-span-4">
                        <input
                          className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent "
                          type="text"
                          name="title"
                          placeholder="Product title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6"></div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6"></div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6"></div>
                  </div>
                  <div class="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                      <button
                        class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-4 py-2 rounded-lg text-sm border-gray-200 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-300 focus:border-gray-300 active:text-gray-500 focus:ring focus:ring-gray-300 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-red-700"
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                    <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                      <button
                        class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-500 border border-transparent active:bg-red-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12"
                        type="submit"
                      >
                        {" "}
                        <span>Add Category</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="drawer-handle">
          <i className="drawer-handle-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
