import Image from "next/image";

export const BrandIcon = ({ nav }: { nav?: boolean }) => {
  return (
    <Image
      alt="logo"
      width={!nav ? 60 : 40}
      height={!nav ? 60 : 40}
      src="/brand-icon.png"
    />
  );
};
