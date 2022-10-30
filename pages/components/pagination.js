export default function Pagination({ meta }) {
  const currentPage = meta["pagination"]["page"];
  const pageCount = meta["pagination"]["pageCount"];

  let pages = [currentPage] || [];

  for (let i = 1; i < 3; i++) {
    if (currentPage - i > 0) {
      pages.unshift(currentPage - i);
    }
    if (currentPage + i <= pageCount) {
      pages.push(currentPage + i);
    }
  }

  return (
    <nav>
      <ul class="flex flex-row justify-center raleway my-2 py-2">
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li>
            <a href="#" className="py-2 px-3 ml-0 leading-tight">
              {page}
            </a>
          </li>
        ))}
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
