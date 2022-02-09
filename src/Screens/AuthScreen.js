import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction";

toast.configure();

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const [admindetails, setAdminDetails] = React.useState({
    email: "",
    password: "",
  });

  const toastMessage = (message, type) => {
    switch (type) {
      case "success":
        const notify = () => {
          toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        };
        notify();
        break;

      case "error":
        console.log("working", message);
        const notify1 = () => {
          toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        };
        notify1();
        break;

      case "warning":
        toast.warn(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setAdminDetails({ ...admindetails, email: value });
        break;
      case "password":
        setAdminDetails({ ...admindetails, password: value });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAdmin();
  };

  const fetchAdmin = () => {
    dispatch(login(admindetails.email, admindetails.password));
  };

  React.useEffect(() => {}, []);
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src="https://dashtar-admin.vercel.app/static/media/login-office-dark.c7786a89.jpeg"
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                  Email
                </label>
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent "
                  type="email"
                  name="email"
                  placeholder="Enter Email "
                  onChange={handleChange}
                  required
                />
                <div className="mt-6"></div>
                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                  Password
                </label>
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 bg-gray-100 border-transparent "
                  type="password"
                  name="password"
                  placeholder="***************"
                  onChange={handleChange}
                  required
                />
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 mt-4 h-12 w-full"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
