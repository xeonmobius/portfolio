import Image from "next/future/image";
import profilePic from "../public/me.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid xl:grid-cols-2 xl:mx-96 md:mx-36 lg:grid-cols-1">
      <div className="h-[50vh]">
        <h1 className="text-8xl raleway my-3">
          Shannon <br></br> Chowdhury
        </h1>
        <p className="raleway my-3 text-lg">
          I am a developer based in Toronto. I help clients build complex,
          beautiful and responsive websites.
        </p>
        <Link href="/contactMe">
          <button className="bg-black text-white text-lg px-4 py-1.5 hover:bg-gray-700 active:bg-white active:text-black">
            Lets meet
          </button>
        </Link>
      </div>
      <Image className="object-contain" src={profilePic} alt="Pic of Shannon" />
    </div>
  );
}
