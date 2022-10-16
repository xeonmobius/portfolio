import Link from 'next/link'

export default function Navbar(props) {
  return (
    <>
      <nav className="bg-white sticky px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-black-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <p className="self-center text-xl font-semibold whitespace-nowrap">
              Shannon Chowdhury
            </p>
          </Link>
          <div className="flex md:order-2">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link
                  href="#"
                  className="focus:text-black focus:underline block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Resume
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="focus:text-black focus:underline block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus:text-black focus:underline block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  );
}
