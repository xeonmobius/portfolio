import useSWR from "swr";

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
        <h1 className="text-8xl raleway">loading...</h1>
      </div>
    );

  return (
    <div className="flex flex-col xl:mx-96 md:mx-36">
      <div className="flex flex-row my-2 py-2">
        <div className="basis-1/12 my-auto">
          <h4>3 Min</h4>
          <h6>Mar 3rd, 2022</h6>
        </div>
        <div className="basis-11/12">
          <h1 className="text-6xl">{data["data"][0]["attributes"]["title"]}</h1>
          <p className="py-2 text-justify">
            {data["data"][0]["attributes"]["post"]}
          </p>
        </div>
      </div>
    </div>
  );
}
