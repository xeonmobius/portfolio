import { useState } from "react";
import axios from "axios";

export default function ContactMe() {
  const [myForm, setMyForm] = useState({ senderEmail: "", message: "" });

  const [toast, setToast] = useState("");

  const onEmailChange = (e) => {
    e.preventDefault();
    setMyForm({ ...myForm, senderEmail: e.target.value });
  };

  const onMessageChange = (e) => {
    e.preventDefault();
    setMyForm({ ...myForm, message: e.target.value });
  };

  const submitClicked = async (e) => {
    e.preventDefault();

    if (myForm.senderEmail === "" || myForm.message === "") {
      return;
    }

    const payload = {
      data: {
        senderEmail: myForm.senderEmail,
        message: myForm.message,
      },
    };

    console.log("payload: ", payload);
    const { data, status } = await axios.post(
      "http://localhost:1337/api/contact-messages",
      payload
    );

    if (status === 200) {
      setMyForm({ senderEmail: "", message: "" });
      
      setToast('success');

      const timer = setTimeout(() => {
        setToast('');
      }, 3000);

    }
  };

  return (
    <div className="flex flex-col items-center xl:mx-96 md:mx-36 h-screen">
      <h1 className="text-8xl raleway my-2 py-2 text-center">
        Contact me today!
      </h1>
      <form className="flex flex-col w-8/12">
        <label className="raleway text-lg">Email*</label>
        <input
          className="border-black border resize"
          type="email"
          id="email"
          onChange={(e) => onEmailChange(e)}
          value={myForm.senderEmail}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        ></input>
        <label className="raleway text-lg">Message*</label>
        <textarea
          rows="7"
          className="border-black border"
          type="text"
          id="message"
          placeholder="Send me a general message and I will get back to you!"
          onChange={(e) => onMessageChange(e)}
          value={myForm.message}
          required
        ></textarea>
        <button
          className="bg-black text-white text-lg px-4 py-1.5 my-1.5 hover:bg-gray-700 active:bg-white active:text-black"
          type="submit"
          onClick={(e) => submitClicked(e)}
        >
          Submit
        </button>
      </form>
      {toast === "success" && <h1>Success!</h1>}
    </div>
  );
}
