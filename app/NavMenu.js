import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav>
      <Link href="/">
        <Image src="/next.svg" width={50} height={50} alt="image of next" />
      </Link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
