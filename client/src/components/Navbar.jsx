import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Home, Trees, Plus, User, LogOut, LogIn, Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass =
    "flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-opacity-10 hover:bg-green-500 transition-colors";

  return (
    <nav className="sticky top-0 z-50 shadow-lg border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <Leaf className="h-8 w-8 text-green-500" />
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Urvann Plants
            </span>
          </Link>

          {/* Navigation */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex items-center space-x-1 absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto 
            md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none border-t md:border-t-0  
            flex-col md:flex-row space-y-2 md:space-y-0 z-50 bg-white rounded-lg`}
          >
            <Link to="/" className={navLinkClass} onClick={closeMenu}>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            {user && (
            <Link to="/plants" className={navLinkClass} onClick={closeMenu}>
              <Trees className="h-4 w-4" />
              <span>Plants</span>
            </Link>
            )}

            {user && user.role === "admin" && (
              <Link to="/add-plant" className={navLinkClass} onClick={closeMenu}>
                <Plus className="h-4 w-4" />
                <span>Add Plant</span>
              </Link>
            )}

            {/* User */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-3 md:ml-4 w-full md:w-auto">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full">
                    <User className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      {user.username}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      }`}
                    >
                      {user.role}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-1 px-3 py-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900 rounded-lg transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  onClick={closeMenu}
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-green-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
