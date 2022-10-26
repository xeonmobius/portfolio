import useSWR from "swr";
import MarkdownRender from "./components/MarkdownRender";
import Pagination from "./components/pagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Blog() {
  const { data, error } = useSWR("http://127.0.0.1:1337/api/blogs", fetcher);

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-8xl raleway">Something went wrong...</h1>
        <p>{error}</p>
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-8xl raleway">Loading...</h1>
      </div>
    );

  return (
    <div>
      <div className="flex flex-col xl:mx-96 md:mx-36 my-2 py-2">
        {data["data"].map((data) => (
          <div className="mb-24">
            <MarkdownRender
              content={data["attributes"]["post"]}
            ></MarkdownRender>
            <hr class="my-6 sm:mx-auto border-black lg:my-8" />
          </div>
        ))}
      </div>
      <Pagination meta={data['meta']}></Pagination>
    </div>
  );
}
