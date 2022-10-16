export default function Hero() {
  return (
    <div className="grid h-screen place-items-center">
      <table className="fixed">
        <tbody>
          <tr>
            <td>
              <h1 className="text-6xl">
                Shannon <br></br> Chowdhury
              </h1>
              <p>
                I am a developer based in Toronto. I help clients build complex,
                beautiful and responsive websites.
              </p>
              <button className="bg-black text-white">Lets meet</button>
            </td>
            <td>Place Holder</td>
          </tr>
          <tr>
            <td>Place Holder</td>
            <td>
              <h1 className="text-6xl">
                Creative <br></br>Full <br></br>Stack <br></br>Developer
              </h1>
              <button className="bg-black text-white">See my work</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
