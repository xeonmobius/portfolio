import useSWR from "swr";
import MdRender from "../components/mdRender";
import Pagination from "../components/pagination";
import { useState } from "react";

export default function Blog({ STRAPI_URL }) {
  const fetcher = async url => {
    const res = await fetch(url)

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
  
    return res.json()
  }
  

  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `${STRAPI_URL}blogs?pagination[page]=${page}&pagination[pageSize]=${10}`,
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
  return {
    props: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  };
}
