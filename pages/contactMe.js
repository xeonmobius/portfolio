export default function ContactMe() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-8xl raleway my-2 py-2">Contact me today!</h1>
      <form className="flex flex-col">
        <label for="email" className="raleway text-lg">
          Email*
        </label>
        <input className="border-black border resize" type="email" id="email"></input>
        <label for="message" className="raleway text-lg">
          Message*
        </label>
        <input className="border-black border" type="text" id="message"></input>
        <button className="bg-black text-white text-lg px-4 py-1.5 my-1.5" type="submit">Submit</button>
      </form>
    </div>
  );
}
