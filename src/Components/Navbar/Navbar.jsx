import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#feature">Feature</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] w-8 h-8 rounded-md"></div>
          <a className=" text-xl font-Jost font-semibold">Skill Factory</a>
        </div>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="gap-10 font-semibold font-Jost text-black text-base menu-horizontal px-1">
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#feature">Feature</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <div>
          <details className="dropdown font-Jost">
            <summary className="flex cursor-pointer gap-1 py-1.5 items-center rounded-sm px-4 font-Jost text-[#9A7AF1] text-base">
              <TbWorld className="text-xl" />
              <h1 >Language</h1>
            </summary>
            <ul className="p-2 font-Jost shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Bangla</a>
              </li>
              <li>
                <a>Spanish</a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <Link to={'/signin'} className=" rounded-sm px-4 py-2 bg-[#9A7AF1] font-Jost text-white text-sm">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
