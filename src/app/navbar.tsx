"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); //menggunakan hook usePathname untuk mengambil pathname untuk mengetahui pathname/route saat ini
  const router = useRouter(); //menggunakan hook useRouter untuk menggunakan fungsi router untuk mengarahkan ke halaman yang dituju
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
      <div className="flex items-center">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathname === "/" ? "text-white" : "text-blue-300"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathname === "/about" ? "text-white" : "text-blue-300"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathname === "/about/profile" ? "text-white" : "text-blue-300"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <button
          className="bg-white rounded-md px-3 text-sm h-7"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
