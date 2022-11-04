import MdRender from "../components/mdRender";
import useSWR from "swr";

export default function Resume({ STRAPI_URL }) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error } = useSWR(`${STRAPI_URL}resume-contents`, fetcher, {
    onSuccess: (data, key, config) => {
      console.log("Successful pull of resume section");
    },
  });

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
    <div className="my-2 py-2 flex items-center justify-center">
      <div className="text-justify flex flex-col">
        <MdRender
          className="w-[100vh]"
          content={data["data"][0]["attributes"]["content"]}
        ></MdRender>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  };
}
