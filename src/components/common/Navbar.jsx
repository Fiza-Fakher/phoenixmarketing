import React from "react";
import { links } from "../../constant";

function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <img src="logo.png" alt="Logo" className="h-16" />

        <ul className="flex items-center gap-10 mr-4">
          {links.map((item, index) => {
            const isActive = item === "Home"; 

            return (
              <li key={index}>
                <a
                  href="#"
                  className={`text-[16px] font-medium ${
                    isActive
                      ? "text-[var(--button-color)] border-b-2 border-[var(--button-color)] pb-1"
                      : "text-gray-800 hover:text-[var(--button-color)]"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;