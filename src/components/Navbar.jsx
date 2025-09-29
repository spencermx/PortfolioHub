// components/Navbar.jsx
"use client";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl text-teal-400">💻</span>
          <span className="text-xl font-semibold text-white tracking-tight">
            Spencer Maas
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="md:hidden p-2 text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:flex md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 mt-4 md:mt-0 bg-gray-800 md:bg-transparent rounded-lg border border-gray-700 md:border-0 text-sm font-medium">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 transition-colors"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 md:w-auto transition-colors"
              >
                Projects
                <svg
                  className="w-3 h-3 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="hidden absolute z-10 bg-gray-800 rounded-lg shadow-lg w-44 border border-gray-700"
              >
                <ul className="py-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="/chat"
                      className="block px-4 py-2 hover:bg-gray-700 hover:text-teal-400 transition-colors"
                    >
                      Chatroom
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
