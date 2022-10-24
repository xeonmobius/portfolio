import ResumeSubsection from "./components/resumeSubsection";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Resume() {
  const { data, error } = useSWR(
    "http://127.0.0.1:1337/api/resume-subsections",
    fetcher,
    {
      onSuccess: (data, key, config) => {
        console.log("Successful pull")
    }}
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
      <div className="flex justify-between">
        <h1 className="text-6xl brand">Shannon Chowdhury</h1>
        <div className="raleway text-sm">
          <p>6475199730</p>
          <p>shannon.chow@live.com</p>
          <p>
            https://www.linkedin.com/in/<br></br>shannonchowdhury/
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-5xl">Experience</h2>
      </div>
      <ResumeSubsection
        jobTitle={data['data'][0]['attributes']['jobTitle']}
        points={data['data'][0]['attributes']['points']}
      ></ResumeSubsection>
    </div>
  );
}
