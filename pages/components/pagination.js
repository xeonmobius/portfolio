export default function Pagination({ meta, setPage }) {
  const currentPage = meta["pagination"]["page"];
  const pageCount = meta["pagination"]["pageCount"];

  let pages = [currentPage] || [];

  let j = 3
  for (let i = 1; i < j; i++) {
    if (currentPage - i > 0) {
      j = j + 1
      pages.unshift(currentPage - i);
    }
    if (currentPage + i < pageCount) {
      j = j + 1
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
        <li className="py-2 px-3 ml-0 leading-tight hover:cursor-pointer hover:underline" onClick={() => previousPage()}>Previous</li>
        {pages.map((page) => (
          <li
            className="py-2 px-3 ml-0 leading-tight hover:cursor-pointer hover:underline"
            onClick={() => setPage(page)}
          >
            {page}
          </li>
        ))}
        <li className="py-2 px-3 ml-0 leading-tight hover:cursor-pointer hover:underline" onClick={() => nextPage()}>
          Next
        </li>
      </ul>
    </nav>
  );
}
