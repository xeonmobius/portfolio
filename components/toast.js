export default function Toast({ type, message }) {
  if (type === "error") {
    return (
      <button className="bg-red-700 text-white text-lg px-4 py-1.5">
        Error: {message}
      </button>
    );
  }
  if (type === "success") {
    return (
      <button className="bg-green-700 text-white text-lg px-4 py-1.5">
        Success! {message}
      </button>
    );
  }
}
