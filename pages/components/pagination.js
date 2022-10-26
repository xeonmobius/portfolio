export default function Pagination({ meta }) {
  const currentPage = meta["pagination"]["page"];
  console.log({ currentPage });
  return (
    <nav>
      <ul class="flex flex-row justify-center raleway my-2 py-2">
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            Previous
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            1
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="true"
            className="py-2 px-3 ml-0 leading-tight"
          >
            3
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            4
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            5
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
