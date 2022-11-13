import useSWR from "swr";
import MdRender from "../components/mdRender";
import Pagination from "../components/pagination";
import { useState } from "react";

export default function Blog({ STRAPI_URL_BLOG }) {
  const fetcher = async url => {
    const res = await fetch(url)
    return res.json()
  }
  

  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `${STRAPI_URL_BLOG}?pagination[page]=${page}&pagination[pageSize]=${10}`,
    fetcher
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
    <>
      <div className="my-2 py-2 flex items-center justify-center">
        <div className="flex flex-col text-justify">
          {data["data"].map((data) => (
            <div className="mb-24"  key={data["id"]}>
              <MdRender
                className="w-[100vh]"
                content={data["attributes"]["post"]}
              ></MdRender>
            </div>
          ))}
        </div>
      </div>
      <Pagination meta={data["meta"]} setPage={setPage}></Pagination>
    </>
  );
}

export async function getServerSideProps() {
  console.log(process.env.STRAPI_URL_BLOG)
  return {
    props: {
      STRAPI_URL_BLOG: process.env.STRAPI_URL_BLOG,
    },
  };
}
