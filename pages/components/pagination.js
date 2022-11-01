import next from "next";
import useSWR from "swr";

export default function Pagination({ meta, setPage }) {
  const currentPage = meta["pagination"]["page"];
  const pageCount = meta["pagination"]["pageCount"];

  let pages = [currentPage] || [];

  for (let i = 1; i < 3; i++) {
    if (currentPage - i > 0) {
      pages.unshift(currentPage - i);
    }
    if (currentPage + i < pageCount) {
      pages.push(currentPage + i);
    }
  }

  const nextPage = () => {
    if (currentPage + 1 < pageCount) {
      setPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage - 1 > 0) {
      setPage(currentPage - 1);
    }
  };

  return (
    <nav>
      <ul class="flex flex-row justify-center raleway my-2 py-2">
        <li className="py-2 px-3 ml-0 leading-tight" onClick={() => previousPage()}>Previous</li>
        {pages.map((page) => (
          <li
            className="py-2 px-3 ml-0 leading-tight"
            onClick={() => setPage(page)}
          >
            {page}
          </li>
        ))}
        <li className="py-2 px-3 ml-0 leading-tight" onClick={() => nextPage()}>
          Next
        </li>
      </ul>
    </nav>
  );
}
