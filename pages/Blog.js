import useSWR from "swr";
import MdRender from "./components/mdRender";
import Pagination from "./components/pagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Blog() {
  const { data, error } = useSWR("http://127.0.0.1:1337/api/blogs?pagination[page]=1&pagination[pageSize]=10", fetcher);

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
    <>
      <div className="my-2 py-2 flex items-center justify-center">
        <div className="flex flex-col text-justify">
          {data["data"].map((data) => (
            <div className="mb-24">
              <MdRender content={data["attributes"]["post"]}></MdRender>
            </div>
          ))}
        </div>
      </div>
      <Pagination meta={data["meta"]}></Pagination>
    </>
  );
}
