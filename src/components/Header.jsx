import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="flex w-full bg-blue-700 items-center p-4">
      <NavLink
        to="/cart"
        className="text-white text-2xl items-center ml-auto flex"
      >
        <AiOutlineShoppingCart /> Cart
      </NavLink>
    </header>
  );
}
