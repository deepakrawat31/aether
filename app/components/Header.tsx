import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-surface border-b-surface-variant sticky top-0 z-50 flex items-center justify-between gap-4 border-b py-4">
      <Link href={"/"}>
        <Image
          src={"/favicon.webp"}
          alt="Icon"
          height={32}
          width={32}
          className="size-6 transition-transform duration-300 hover:scale-90"
        />
      </Link>
      <nav className="flex items-center gap-4 **:font-bold **:uppercase **:opacity-60 **:transition-opacity **:duration-300 **:hover:opacity-100">
        <Link href={"/"}>flowers</Link>
        <Link href={"/"}>login</Link>
        <button className="cursor-pointer">cart(0)</button>
      </nav>
    </header>
  );
}
