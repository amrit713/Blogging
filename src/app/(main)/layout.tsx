import { Navbar } from "@/components/navbar/navbar";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <main className="h-full">
      <div className="w-full fixed h-[80px]  z-30  inset-y-0">
        <Navbar currentUser={currentUser} />
      </div>

      <div className="mt-[80px]  p-4 max-w-[1520px] mx-auto ">{children}</div>
    </main>
  );
}
