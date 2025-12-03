import { useState } from "react";
import { Link } from "react-router";


const linksData = [
  { name: "Home", href: "/" },
  { name: "Create Todo", href: "/create" },
  { name: "About", href: "/about" },
];

const link =
  "text-center bg-lime-500 hover:underline hover:font-semibold hover:text-gray-800 px-3 rounded-lg border transition-colors duration-300";

const nav =
  "flex flex-row justify-between bg-lime-400 text-slate-700 py-2 items-center shadow-md  shadow-slate-500 rounded-b-lg";

const hamburgurIcon = "text-2xl hover:cursor-pointer ";

const list =
  "flex flex-col m-1 space-y-1 sm:flex-row sm:space-y-0 sm:space-x-2 hover:cursor-pointer justify-center";

function NavLinks() {
  return (
    <ul className={list}>
      {linksData.map((item) => (
        <li key={item.name} className={link}>
          <Link to={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={nav}>
      <h1 className="text-2xl text-center px-1 font-bold">TODO</h1>

      {/* DESKTOP SCREENS */}
      <div className="hidden sm:flex ">
        <div className="py-1 mx-2 bg-slate-400 bg-opacity-60 rounded-md">
          <NavLinks />
        </div>
      </div>

      {/* MOBILE SCREENS */}
      <div className=" flex flex-col px-2 sm:hidden">
        <div className="">
          <button
            className={hamburgurIcon}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            ☰
          </button>
        </div>
        <div className={isOpen ? "flex" : "hidden"}>
          <div className="mt-0 bg-slate-400 bg-opacity-60 rounded-md">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
