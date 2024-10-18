import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-3 py-2 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-3 py-2 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-3 py-2 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-3 py-2 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-3 py-2 rounded-full text-black  shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-3 py-2 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-3 py-2 rounded-full text-black  shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-3 py-2 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-3 py-2 rounded-full text-black  shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
