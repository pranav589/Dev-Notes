import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/coding.png";

function Navbar({ setIsLoggedIn, isLoggedIn, userData }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token_store");
    setIsLoggedIn(false);
  };

  const handleLogoClick = () => {
    if (userData) {
      history.push("/");
    } else {
      history.push("/login");
    }
  };

  return (
    <header className="text-gray-600 body-font border-2  border-gray-200 shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
        <div
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={Logo}
            alt=""
            className="w-10 h-10 text-white p-2 rounded-full bg-green-300"
          />
          <span className="ml-3 text-xl">Dev Notes</span>
        </div>
        {isLoggedIn && (
          <nav className="flex items-center">
            <div className="mr-5 flex items-center cursor-pointer">
              <p className="mr-1">{userData?.userName}</p>
              <i className="fas fa-user-alt"></i>
            </div>

            <div
              className="flex items-center cursor-pointer"
              onClick={handleLogout}
            >
              <p className="mr-1">Logout</p>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
