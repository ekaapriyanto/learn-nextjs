"use client";

import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const disableNavbar = ["/login", "/register"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </div>
  );
}
