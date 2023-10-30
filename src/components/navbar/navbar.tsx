"use client";

import { BrandIcon } from "@/components/Icon";
import { Logo } from "./logo";
import { MobileNavbar } from "./navbar-mobile";
import { NavbarRight } from "./navbar-right";
import { NavbarRoute } from "./navbar-route";

import { SafeUser } from "@/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className=" h-full border-b  bg-white  dark:bg-[#020917] shadow-sm">
      <div className=" h-full p-4 max-w-[1520px] mx-auto  flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <MobileNavbar />

          <div className="hidden md:flex">
            <Logo />
          </div>
        </div>

        <div className=" hidden md:flex">
          <NavbarRoute />
        </div>

        <NavbarRight currentUser={currentUser} />
      </div>
    </div>
  );
};
