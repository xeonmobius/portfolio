import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white sticky py-2 w-full top-0 left-0 border-b border-black">
      <div className="flex flex-wrap justify-between items-center xl:mx-96 md:mx-36">
        <Link href="/">
          <p className="brand hover:cursor-pointer hover:underline text-4xl font-semibold whitespace-nowrap">
            Shannon Chowdhury
          </p>
        </Link>
        <ul className="raleway flex space-x-8">
          <li>
            <Link href="/resume" className="py-2 px-4">
              <p className="hover:cursor-pointer hover:underline text-black">
                Resume
              </p>
            </Link>
          </li>
          <li>
            <Link href="/pastWork" className="py-2 px-4">
              <p className="hover:cursor-pointer hover:underline block text-black">
                Past Work
              </p>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="py-2 px-4">
              <p className="hover:cursor-pointer hover:underline text-black">
                Blog
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contactMe" className="py-2 px-4">
              <p className="hover:cursor-pointer hover:underline block text-black">
                Contact me
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
