import React from "react";

export const Invoice = () => {
  return (
    <div>
      <main className="h-full overflow-y-auto">
        <div className="container grid px-6 mx-auto">
          <h1 class="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
            Invoice
          </h1>
          <div className="bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden">
            <div>
              <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50 dark:border-gray-700 dark:text-gray-300">
                <h1 class="font-bold font-serif text-xl uppercase">
                  Invoice
                  <p class="text-xs mt-1 text-gray-500">
                    Status:{" "}
                    <span class="pl-2 font-medium text-xs capitalize">
                      {" "}
                      <span class="font-serif">
                        <span class="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-100">
                          Delivered
                        </span>
                      </span>
                    </span>
                  </p>
                </h1>
                <div class="lg:text-right text-left">
                  <h2 class="lg:flex lg:justify-end text-lg font-serif font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0">
                    <h3>Phikalhuwa Handloom</h3>
                  </h2>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Cecilia Chapman, 561-4535 Nulla LA, <br></br> United States
                    96522{" "}
                  </p>
                </div>
              </div>
              <div class="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
                <div class="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                  <span class="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                    Date
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400 block">
                    <span>August 30, 2021</span>
                  </span>
                </div>
                <div class="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                  <span class="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                    Invoice No.
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400 block">
                    #16e19542
                  </span>
                </div>
                <div class="flex flex-col lg:text-right text-left">
                  <span class="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                    Invoice To.
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400 block">
                    Aurora E. Amerson402
                    <br />
                    Overlook Dr,
                    <br />
                    Selma, AL, US, 36703
                  </span>
                </div>
              </div>
              <div>
                <div class="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 my-8">
                  <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                      <thead class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                        <tr>
                          <td class="px-4 py-3"> Sr.</td>
                          <td class="px-4 py-3">Product Name</td>
                          <td class="px-4 py-3 text-center">Quantity</td>
                          <td class="px-4 py-3 text-center">Item Price</td>
                          <td class="px-4 py-3 text-center">Amount</td>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-serif text-sm ">
                        <tr class="dark:border-gray-700 dark:text-gray-400">
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
                            1{" "}
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-normal text-gray-500">
                            Sliced Turkey Breast
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-bold text-center">
                            1{" "}
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-bold text-center">
                            $10.00{" "}
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500">
                            $10.00
                          </td>
                        </tr>
                        <tr class="dark:border-gray-700 dark:text-gray-400">
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
                            2{" "}
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-normal text-gray-500">
                            Celery Sticks
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-bold text-center">
                            1{" "}
                          </td>
                          <td class="px-4 py-3 px-6 py-1 whitespace-nowrap font-bold text-center">
                            $13.00{" "}
                          </td>
                          <td class="px-4 py-3 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500">
                            $13.00
                          </td>
                        </tr>
                        <tr class="dark:border-gray-700 dark:text-gray-400">
                          <td class="px-4 py-3 whitespace-nowrap font-normal text-gray-500 text-left">
                            3{" "}
                          </td>
                          <td class="px-4 py-3 whitespace-nowrap font-normal text-gray-500">
                            Mangoes
                          </td>
                          <td class="px-4 py-3 whitespace-nowrap font-bold text-center">
                            1{" "}
                          </td>
                          <td class="px-4 py-3 whitespace-nowrap font-bold text-center">
                            $10.00{" "}
                          </td>
                          <td class="px-4 py-3 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500">
                            $10.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex lg:flex-row md:flex-row flex-col justify-between">
                  <div class="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                    <span class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                      Payment Method
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                      COD
                    </span>
                  </div>
                  <div class="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                    <span class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                      Shipping Cost
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                      $10.00
                    </span>
                  </div>
                  <div class="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                    <span class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                      Discount
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                      $0.00
                    </span>
                  </div>
                  <div class="flex flex-col sm:flex-wrap">
                    <span class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                      Total Amount
                    </span>
                    <span class="text-xl font-serif font-bold text-red-500 dark:text-green-500 block">
                      $43.00
                    </span>
                  </div>
                </div>
              </div>
              <div class="mb-4 mt-3 flex justify-end">
                <button class="flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto">
                  Print Invoice{" "}
                  <span class="ml-2">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
