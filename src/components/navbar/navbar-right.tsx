"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ModeToggle } from "./navbar-toggle-theme";
import { SafeUser } from "@/types";
import { NavbarUserDropdown } from "./navbar-user-dropdown";
import { useRouter } from "next/navigation";

interface NavbarRightProps {
  currentUser?: SafeUser | null;
}

export const NavbarRight = ({ currentUser }: NavbarRightProps) => {
  const router = useRouter();
  const { onOpen } = useModal();

  return (
    <div className="flex  gap-x-4 items-center">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={() => onOpen("search")}
      >
        <Search className=" h-6 w-6" />
      </Button>
      {currentUser ? (
        <div className="flex gap-x-4 items-center">
          <Button
            className="rounded-[20px]"
            onClick={() => router.push("/create")}
          >
            Write
          </Button>
          <NavbarUserDropdown currentUser={currentUser} />
        </div>
      ) : (
        <div className="flex gap-x-4 items-center">
          <Button
            variant="ghost"
            className=" rounded-full"
            onClick={() => onOpen("login")}
          >
            Log in
          </Button>
          <Button className=" rounded-full" onClick={() => onOpen("signup")}>
            Sign up{" "}
          </Button>
        </div>
      )}

      <ModeToggle />
    </div>
  );
};
