import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "My feed",
    href: "/",
  },
  {
    label: "Discussions",
    href: "/discussions",
  },
  {
    label: "Bookmarks",
    href: "/bookmars",
  },
];

export const NavbarRoute = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:gap-x-14">
      {routes.map((route) => (
        <Link key={route.label} href={route.href}>
          <p
            className={cn(
              "text-zinc-900 hover:text-blue-600 font-medium transition  ",
              pathname === route.href && "text-blue-600  "
            )}
          >
            {route.label}
          </p>
        </Link>
      ))}
    </div>
  );
};
