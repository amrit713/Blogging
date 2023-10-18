"use client";

import { useEffect, useState } from "react";

import { SignupModal } from "@/components/modal/signup-modal";
import { LoginModal } from "@/components/modal/login-modal";
import { SearchModal } from "@/components/modal/search-modal";

export const ModalProvider = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;
  return (
    <>
      <SignupModal />
      <LoginModal />
      <SearchModal />
    </>
  );
};
