import { useState } from "react";

export default function ContactMe() {
  const [myForm, setMyForm] = useState({email:"", message:""})


  const submitClicked = (e) => {
    e.preventDefault();

  };
  return (
    <div className="flex flex-col items-center xl:mx-96 md:mx-36 h-screen">
      <h1 className="text-8xl raleway my-2 py-2 text-center">Contact me today!</h1>
      <form className="flex flex-col w-8/12">
        <label for="email" className="raleway text-lg">
          Email*
        </label>
        <input
          className="border-black border resize"
          type="email"
          id="email"
        ></input>
        <label for="message" className="raleway text-lg">
          Message*
        </label>
        <textarea
          rows="7"
          className="border-black border"
          type="text"
          id="message"
          placeholder="Send me a general message and I will get back to you!"
        ></textarea>
        <button
          className="bg-black text-white text-lg px-4 py-1.5 my-1.5 hover:bg-gray-700 active:bg-white active:text-black"
          type="submit"
          onClick={(e) => submitClicked(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
