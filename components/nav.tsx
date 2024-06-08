"use client";
import React from "react";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className="fixed top-1 left-[5vw] z-10 mt-3 px-8 flex justify-between items-center w-[90vw] mx-auto h-[4rem] 
     bg-black-300 rounded-3xl [background-image:radial-gradient(100%_100%_at_top,rgba(255,255,255,0.4),rgba(255,255,255,0))]
    "
    >
      <div className="w-[15%]">
        <p className="text-2xl text-white font-bold">Inbox Radar</p>
      </div>
      <div className="flex items-center w-[85%]">
        <div className="flex items-center justify-between gap-4 w-full">
          <ul className="flex gap-10 ml-36">
            <li className="hover:text-gray-400 cursor-pointer">
              <Link href="#features">Pricing</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link href="#features">Blog</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link href="#features">Contact</Link>
            </li>
          </ul>
          <div className="flex gap-5">
            <Button
              variant="outline"
              className="invisible md:visible rounded-3xl"
            >
              Log In
            </Button>
            <Button
              variant="destructive"
              className="invisible md:visible rounded-3xl bg-green-500"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 md:hidden">
        <Button variant="destructive">Sign In</Button>
        {!isOpen ? (
          <HamburgerMenuIcon
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Cross1Icon
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;