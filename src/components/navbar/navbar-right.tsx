"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";

export const NavbarRight = () => {
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
    </div>
  );
};
