import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white sticky px-2 py-2 w-full top-0 left-0 border-b border-black">
        <div className="flex flex-wrap justify-between items-center mx-96">
          <Link href="/hero">
            <p className="brand hover:cursor-pointer text-4xl font-semibold whitespace-nowrap">
              Shannon Chowdhury
            </p>
          </Link>
          <ul className="raleway flex p-4 space-x-8">
            <li>
              <Link
                href="/"
                className="py-2 px-4 text-gray-700"
                aria-current="page"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="py-2 px-4 text-gray-700"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-2 px-4 text-gray-700"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
