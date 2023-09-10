import Link from "next/link";
import Image from "next/image";
import AuthCheck from "@/components/AuthCheck";
import NavListItem from "@/components/NavListItem";
import { SignInButton, SignOutButton } from "@/components/buttons";

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center h-[70px] text-white bg-blue-600">
      <Link href={"/"} className="ml-4">
        <Image src="/logo.svg" alt="NextSpace Logo" width="216" height="30" />
      </Link>
      <ul className="flex mr-4">
        <NavListItem>
          <Link href={"/about"}>About</Link>
        </NavListItem>
        <NavListItem>
          <Link href={"/blog"}>Blog</Link>
        </NavListItem>
        <NavListItem>
          <Link href={"/users"}>Users</Link>
        </NavListItem>
        <NavListItem>
          <SignInButton />
        </NavListItem>
        <NavListItem>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </NavListItem>
      </ul>
    </nav>
  );
}
