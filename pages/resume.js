import MarkdownRender from "./components/markdownRender";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Resume() {
  const { data, error } = useSWR(
    "http://127.0.0.1:1337/api/resume-contents",
    fetcher,
    {
      onSuccess: (data, key, config) => {
        console.log("Successful pull of resume section");
      },
    }
  );

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
    <div className="flex flex-col xl:mx-96 md:mx-36 my-2 py-2">
        <MarkdownRender
          content={data["data"][0]["attributes"]["content"]}
        ></MarkdownRender>
    </div>
  );
}
