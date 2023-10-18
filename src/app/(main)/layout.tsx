import { Navbar } from "@/components/navbar/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full">
      <div className="w-full fixed h-[80px]  z-30  inset-y-0">
        <Navbar />
      </div>

      {children}
    </main>
  );
}
