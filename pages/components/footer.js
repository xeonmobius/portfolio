export default function Footer() {
  return (
    <footer className="bg-white py-2 w-full border-t border-black flex justify-center relative bottom-0">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Shannon Chowdhury. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6"></a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6"></a>
        </li>
        <li>
          <a href="#" className="hover:underline"></a>
        </li>
      </ul>
    </footer>
  );
}
