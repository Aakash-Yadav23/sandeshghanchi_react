import React, { Dispatch, useState } from "react";
import Img from "../public/logo.png";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./loader/Loader";
import { logout } from "../redux/action/UserAction";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();

  const { loading, error, isAuthenticated, user } = useSelector(
    (state: any) => {
      return state.user;
    }
  );
  console.log("loading", user?.user);
  const handleLogout= async() => {
    dispatch(logout())
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <nav className="w-full md:w-full sm:w-full bg-[#C10A39] shadow">
        <div className="justify-between px-4 mx-auto md:w-full lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <img src={Img} width={150} height={100} alt="logo" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none :border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/community">Community</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/marriage">Marriage</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/organization">Organization</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/services">Services</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/achievements">Achievements</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/magazine">Magazine</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              {isAuthenticated ? (
                <>
                <div className="lg:hidden cursor-pointer md:inline-block inline-block w-fit px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]">
                  <p>{user?.user?.fullName}</p>
                </div>
                <div
                onClick={handleLogout}
                    className="inline-block cursor-pointer lg:hidden md:inline-block  w-full px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                   >
Logout
                </div>
                </>
              ) : (
                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <Link
                    to="/login"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                  >
                    लॉग इन
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                  >
                    साइन अप
                  </Link>
                </div>
              )}
            </div>
          </div>
          {isAuthenticated ? (
            <div className="flex gap-[25px]">
              <div className="hidden md:inline-block  cursor-pointer w-fit px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]">
                <p>{user?.user?.fullName}</p>
              </div>
              <div onClick={handleLogout} className="px-4 py-2 text-white bg-[#b90434] cursor-pointer rounded-md shadow hover:bg-[#a3485f]">
                Logout
              </div>
            </div>
          ) : (
            <div className="hidden space-x-2 md:inline-block">
              <Link
                to="/login"
                className="px-4 py-2 text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
              >
                लॉग इन
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
              >
                साइन अप
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
