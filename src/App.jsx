import React from 'react';
import { FiSearch, FiBell, FiSettings, FiClock } from 'react-icons/fi';
import { FaCheckCircle, FaMoon } from 'react-icons/fa';

const InvoiceDetails = () => {
  return (
    <div className="flex h-full font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col min-h-screen">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          <span role="img" aria-label="cart">🧺</span> Larkon
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-3 text-sm">
            <li className="font-semibold">GENERAL</li>
            <li className="hover:text-yellow-300">Dashboard</li>
            <li className="hover:text-yellow-300">Products</li>
            <li className="hover:text-yellow-300">Category</li>
            <li className="hover:text-yellow-300">Inventory</li>
            <li className="font-semibold text-white mt-2">Orders</li>
            <li className="ml-4 hover:text-yellow-300">List</li>
            <li className="ml-4 hover:text-yellow-300">Details</li>
            <li className="ml-4 hover:text-yellow-300">Cart</li>
            <li className="ml-4 text-yellow-400 font-bold">Check Out</li>
            <li className="hover:text-yellow-300">Purchases</li>
            <li className="hover:text-yellow-300">Attributes</li>
            <li className="mt-4 font-semibold">Invoices</li>
            <li className="hover:text-yellow-300">Settings</li>
            <li className="mt-4 font-semibold">USERS</li>
            <li className="hover:text-yellow-300">Profile</li>
            <li className="hover:text-yellow-300">Roles</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center px-10 py-4 bg-[#f9f7f7] shadow-sm">
          <h1 className="text-md font-semibold text-gray-600">ORDER CHECKOUT</h1>
          <div className="flex items-center space-x-4">
            <FaMoon className="text-gray-500 cursor-pointer" />
            <div className="relative">
              <FiBell className="text-gray-500 cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">3</span>
            </div>
            <FiSettings className="text-gray-500 cursor-pointer" />
            <FiClock className="text-gray-500 cursor-pointer" />
            <img src="https://i.ibb.co/Vg6JHkR/profile.jpg" alt="user" className="w-8 h-8 rounded-full" />
            <div className="relative">
              <input
                className="pl-10 pr-4 py-1.5 bg-gray-200 rounded-md focus:outline-none text-sm"
                placeholder="Search..."
              />
              <FiSearch className="absolute top-2 left-2 text-gray-500 text-sm" />
            </div>
          </div>
        </header>

        {/* Checkout Layout */}
        <div className="p-10 grid grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="col-span-2 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-lg font-bold mb-6">Personal Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First name" className="border rounded px-4 py-2" />
              <input placeholder="Last name" className="border rounded px-4 py-2" />
              <input placeholder="Email" className="border rounded px-4 py-2" />
              <input placeholder="Number" className="border rounded px-4 py-2" />
            </div>

            <h2 className="text-lg font-bold mt-8 mb-2">Shipping Details</h2>
            <label className="block mb-2 font-medium">Shipping Address :</label>
            <textarea placeholder="Enter address" className="border rounded px-4 py-2 w-full mb-4"></textarea>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input placeholder="zip-code" className="border rounded px-4 py-2" />
              <select className="border rounded px-4 py-2 text-gray-500">
                <option>Choose a city</option>
              </select>
              <select className="border rounded px-4 py-2 text-gray-500">
                <option>Choose a country</option>
              </select>
            </div>
            <button className="text-red-500 text-sm">+ Add New Billing Address</button>

            <h2 className="text-lg font-bold mt-8 mb-4">Shipping Method :</h2>
            <div className="flex gap-4">
              <label className="border rounded-xl px-4 py-4 flex-1 flex items-center gap-4 cursor-pointer">
                <img src="https://i.ibb.co/Fb0rJ2t/dhl.png" alt="DHL" className="w-10" />
                <div>
                  <p className="font-semibold">DHL Fast Services</p>
                  <p className="text-xs text-gray-500">Delivery - Today</p>
                </div>
                <span className="ml-auto font-bold">$10.00</span>
                <input type="radio" name="shipping" className="ml-2" />
              </label>
              <label className="border rounded-xl px-4 py-4 flex-1 flex items-center gap-4 cursor-pointer">
                <img src="https://i.ibb.co/TrpL70c/fedex.png" alt="FedEx" className="w-10" />
                <div>
                  <p className="font-semibold">FedEx Services</p>
                  <p className="text-xs text-gray-500">Delivery - Today</p>
                </div>
                <span className="ml-auto font-bold">$10.00</span>
                <input type="radio" name="shipping" className="ml-2" />
              </label>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="bg-orange-500 text-white rounded-xl p-4 text-center mb-6">
              <p className="font-semibold mb-2">Have a Promo Code ?</p>
              <div className="flex justify-center items-center gap-2">
                <input className="rounded px-3 py-1 text-black" defaultValue="CODE123" />
                <button className="bg-white text-orange-500 px-4 py-1 rounded font-semibold">Apply</button>
              </div>
            </div>

            <h3 className="text-md font-bold mb-4">Order Summary</h3>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between">
                <div className="flex gap-3">
                  <img src="https://i.ibb.co/Wt5n2Zq/shirt.png" className="w-10" alt="shirt" />
                  <div>
                    <p>Men Black Slim Fit T-shirt</p>
                    <p className="text-xs text-gray-500">Size : M</p>
                    <p className="text-xs">Q. 01</p>
                  </div>
                </div>
                <span>$83.00</span>
              </li>
              <li className="flex justify-between">
                <div className="flex gap-3">
                  <img src="https://i.ibb.co/yNPhJXf/pant.png" className="w-10" alt="pant" />
                  <div>
                    <p>Dark Green Cargo Pent</p>
                    <p className="text-xs text-gray-500">Size : M</p>
                    <p className="text-xs">Q. 03</p>
                  </div>
                </div>
                <span>$334.00</span>
              </li>
              <li className="flex justify-between">
                <div className="flex gap-3">
                  <img src="https://i.ibb.co/QpD2Bfx/wallet.png" className="w-10" alt="wallet" />
                  <div>
                    <p>Men Dark Brown Wallet</p>
                    <p className="text-xs text-gray-500">Size : S</p>
                    <p className="text-xs">Q. 01</p>
                  </div>
                </div>
                <span>$137.00</span>
              </li>
              <li className="flex justify-between">
                <div className="flex gap-3">
                  <img src="https://i.ibb.co/9VsPbHD/kids.png" className="w-10" alt="kids shirt" />
                  <div>
                    <p>Kid's Yellow T-shirt</p>
                    <p className="text-xs text-gray-500">Size : S</p>
                    <p className="text-xs">Q. 02</p>
                  </div>
                </div>
                <span>$223.00</span>
              </li>
            </ul>

            <div className="mt-6 border-t pt-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Sub Total :</span>
                <span>$777.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount :</span>
                <span className="text-red-500">- $60.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge :</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total :</span>
                <span>$717.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvoiceDetails;
