export default function Hero() {
  return (
    <div className="grid grid-cols-2 h-screen mx-96">
      <div className="px-2">
        <h1 className="text-8xl raleway my-3">
          Shannon <br></br> Chowdhury
        </h1>
        <p className="raleway my-3 text-lg">
          I am a developer based in Toronto. I help clients build complex,
          beautiful and responsive websites.
        </p>
        <button className="bg-black text-white text-lg px-4 py-1.5">Lets meet</button>
      </div>
      <div className="bg-indigo-500 w-full">
        <p className="mt-3">Place Holder</p>
      </div>
      <div className="bg-indigo-500 w-full">
        <p className="mt-3">Place Holder</p>
      </div>
      <div className="px-2">
        <h1 className="text-8xl raleway my-3">
          Creative <br></br>Full <br></br>Stack <br></br>Developer
        </h1>
        <button className="bg-black text-white text-lg px-4 py-1.5">See my work</button>
      </div>
    </div>
  );
}
