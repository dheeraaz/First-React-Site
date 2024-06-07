import React from "react";
import { Logo } from "../Sub-Components";
import { Navbar } from "../Sub-Components";

function Header() {
  return (
      <header className="flex justify-between items-center px-10 py-4 bg-white fixed top-0 left-0 right-0 shadow-md z-40">
        <Logo />
        <Navbar />
      </header>
  );
}

export default Header;
