import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../redux/actions/productAction";
import { NEW_PRODUCT_RESET } from "../redux/constants/productConstants";
import axios from "axios";

const AddProduct = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [productData, setProductData] = React.useState({
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    childCategory: "",
    subCategory: "",
  });

  const [category, setCategory] = React.useState([]);

  const fetchCategory = async () => {
    const data = await axios("http://localhost:4001/api/v1/getAllCategory", {
      withCredentials: true,
    });

    setCategory(data.data.categories);
  };

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }

    if (success) {
      history.push("/");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, history, success]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", productData.name);
    myForm.set("price", productData.price);
    myForm.set("description", productData.description);
    myForm.set("category", productData.category);
    myForm.set("Stock", productData.quantity);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    switch (name) {
      case "title":
        setProductData({ ...productData, name: value });
        break;
      case "description":
        setProductData({ ...productData, description: value });
        break;
      case "originalPrice":
        setProductData({ ...productData, price: value });
        break;
      case "quantity":
        setProductData({ ...productData, quantity: value });
        break;
      case "category":
        setProductData({ ...productData, category: value });
        break;
      default:
        break;
    }
    console.log(productData);
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
                <h4 className="text-xl font-medium">Add Product</h4>
                <p className="mb-0 text-sm">
                  Add your product and necessary information from here
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
                <form className="block" onSubmit={createProductSubmitHandler}>
                  <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Product Image
                      </label>
                      <div className="col-span-8 sm:col-span-4">
                        <div className="w-full text-center">
                          <div className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer">
                            <input
                              type="file"
                              name="avatar"
                              accept="image/*"
                              onChange={createProductImagesChange}
                              multiple
                            />
                            <span className="mx-auto flex justify-center">
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-3xl text-green-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <polyline points="16 16 12 12 8 16"></polyline>
                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                <polyline points="16 16 12 12 8 16"></polyline>
                              </svg>
                            </span>
                            <p className="text-sm mt-2">Drag your image here</p>
                            <em className="text-xs text-gray-400">
                              (Only *.jpeg and *.png images will be accepted)
                            </em>
                          </div>
                          <aside className="flex flex-row flex-wrap mt-4"></aside>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Product Title/Name
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
                    {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Product Slug
                      </label>
                      <div className="col-span-8 sm:col-span-4">
                        <input
                          className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent "
                          type="text"
                          name="slug"
                          placeholder="Product slug"
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Product Description
                      </label>
                      <div class="col-span-8 sm:col-span-4">
                        <textarea
                          class="block w-full px-3 py-3 text-sm dark:text-gray-300 rounded-md focus:outline-none form-textarea focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-purple-300 border bg-gray-100 border-transparent "
                          name="description"
                          placeholder="Product details"
                          rows="4"
                          spellcheck="false"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Parent Category
                      </label>
                      <div class="col-span-8 sm:col-span-4">
                        <select
                          class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent "
                          name="category"
                          onChange={handleChange}
                        >
                          <option value="" hidden="">
                            Select category
                          </option>
                          {category.map((item) => {
                            return (
                              <option value={item._id} key={item._id}>
                                {item.parentCategory}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Child Category
                      </label>
                      <div class="col-span-8 sm:col-span-4">
                        <select
                          class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent "
                          name="childCategory"
                          onChange={handleChange}
                        >
                          <option value="" hidden="">
                            Select child category
                          </option>
                          {category.map((item) => {
                            return (
                              <option value={item._id} key={item._id}>
                                {item.childCategory}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Sub Category
                      </label>
                      <div class="col-span-8 sm:col-span-4">
                        <select
                          class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 bg-gray-100 border-transparent "
                          name="subCategory"
                          onChange={handleChange}
                        >
                          <option value="" hidden="">
                            Select Sub category
                          </option>
                          {category.map((item) => {
                            return (
                              <option value={item._id} key={item._id}>
                                {item.subCategory}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div> */}
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Product Quantity
                      </label>
                      <div class="col-span-8 sm:col-span-4">
                        <input
                          class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent "
                          type="number"
                          name="quantity"
                          placeholder="Quantity"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                        Product Price
                      </label>
                      <div class="col-span-8 sm:col-span-4">
                        <input
                          class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent "
                          type="number"
                          name="originalPrice"
                          placeholder="Price"
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
                        <span>Add Product</span>
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
