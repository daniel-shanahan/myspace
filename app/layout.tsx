import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "NextSpace",
  description: "Vintage social media for the modern web.",
};

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`max-w-full bg-gray-200 overflow-x-hidden ${inter.className}`}
        >
          <div className="w-[810px] max-w-full mx-auto mb-3">
            <NavMenu />
            <main className="bg-white min-h-[300px] p-4">{children}</main>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
