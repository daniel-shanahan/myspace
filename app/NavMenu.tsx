import Link from "next/link";
import Image from "next/image";

function NavListItem({ href, text }: { href: string; text: string }) {
  return (
    <li className="h-[70px] flex items-center p-1">
      <Link href={href}>{text}</Link>
    </li>
  );
}

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center h-[70px] text-white bg-blue-600">
      <Link href={"/"} className="ml-4">
        <Image src="/logo.svg" alt="NextSpace Logo" width="216" height="30" />
      </Link>
      <ul className="flex mr-4">
        <NavListItem href={"/about"} text={"About"} />
        <NavListItem href={"/blog"} text={"Blog"} />
        <NavListItem href={"/users"} text={"Users"} />
      </ul>
    </nav>
  );
}
