import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Importar desde google
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "QuickBet Movies",
  description: "Sitio de peliculas web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased font-sans`} suppressHydrationWarning>
        <AuthProvider>
          <Toaster />
          <Suspense fallback={<div className="h-16 bg-black" />}>
            <NavBar />
          </Suspense>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}