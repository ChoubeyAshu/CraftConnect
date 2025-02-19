import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/solid";
import NavLogoBlack from "../assets/logos/TextLogoBlack";

function PageNavbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <nav className={`p-4 text-gray-900 shadow-md`}>
      <div className={`w-full flex justify-between items-center relative z-50`}>
        {/* Logo */}
        <Link to="/" className="flex">
          <h1
            className="text-green-800 font-extrabold font-5xl font-stretch-expanded"
          >
            CRAFT
          </h1>
          <h1 className="pl-2">CONNECT</h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link to="/" className="hover:text-orangeMain">
            Home
          </Link>
          <Link to="/products" className=" hover:text-orangeMain">
            Products
          </Link>
          <Link to="/orders" className="hover:text-orangeMain">
            Orders
          </Link>
          <Link to="/contact" className="hover:text-orangeMain">
            Contact
          </Link>
        </div>

        {/* Profile Dropdown */}
        <div className="relative hidden md:block">
          <button
            className="focus:outline-none"
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          >
            <UserCircleIcon className="h-8 w-8 hover:text-yellow-400" />
          </button>

          {/* Dropdown with Transition */}
          <div
            className={`absolute top-16 right-0 w-48 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
              profileMenuOpen ? "scale-y-100" : "scale-y-0"
            } origin-top`}
          >
            <Link
              to="/cart"
              className="block px-4 py-2 text-gray-700 hover:bg-pastelBlue hover:text-gray-900"
            >
              Cart
            </Link>
            <hr className="border-t border-gray-200" />
            <Link
              to="/wishlist"
              className="block px-4 py-2 text-gray-700 hover:bg-pastelBlue hover:text-gray-900"
            >
              Wishlist
            </Link>
            <hr className="border-t border-gray-200" />
            <button
              onClick={() => {
                console.log("Logout clicked");
              }}
              className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-pastelBlue hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-10 w-full bg-white md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <hr className="border-t border-gray-200" />
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>
              <hr className="border-t border-gray-200" />

              <hr className="border-t border-gray-200" />
              <Link to="/orders" className="text-gray-700 hover:text-gray-900">
                Orders
              </Link>
              <hr className="border-t border-gray-200" />

              <hr className="border-t border-gray-200" />
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
              <hr className="border-t border-gray-200" />

              {/* Profile Section in Mobile Menu */}
              <div className="mt-4">
                <h3 className="text-gray-800 font-medium">Profile</h3>
                <Link
                  to="/cart"
                  className="block px-4 py-2 text-gray-700 hover:bg-pastelBlue hover:text-gray-900"
                >
                  Cart
                </Link>
                <hr className="border-t border-gray-200" />
                <Link
                  to="/wishlist"
                  className="block px-4 py-2 text-gray-700 hover:bg-pastelBlue hover:text-gray-900"
                >
                  Wishlist
                </Link>
                <hr className="border-t border-gray-200" />
                <button
                  onClick={() => {
                    console.log("Logout clicked");
                  }}
                  className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-pastelBlue hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default PageNavbar;
