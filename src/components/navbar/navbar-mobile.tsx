import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavbarRoute } from "./navbar-route";
import { Logo } from "./logo";

export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className=" bg-white flex flex-col  gap-y-10 ">
        <Logo />
        <NavbarRoute />
      </SheetContent>
    </Sheet>
  );
};
