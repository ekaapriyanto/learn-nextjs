import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
//import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplikasi GW",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {/* <h1>count Layout : {state}</h1>
        <button onClick={() => setState(state + 1)}>Klik</button> */}
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
