import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-4 dashed">
        <h1 className="text-3xl font-bold underline">Dodokod</h1>
        <p>üye oldun mu? :)</p>
        <button className="bg-primary text-white text-center no-underline inline-block font-bold tracking-[0.2px] cursor-pointer min-w-fit px-10 py-4 rounded-md hover:bg-opacity-90">
          Button
        </button>
        <button className="sm">Button</button>
        <button className="secondary">Button</button>
        <button className="secondary sm">Button</button>
        <button className="secondary lg pill">Button</button>
        <button className="ghost">Button</button>
        <button className="destructive">Button</button>
        <button className="link">Button</button>
        <button className="lg">Button</button>
        <button className="square">Button</button>
        <button className="pill">Button</button>
        <button className="pill lg">Button</button>
        <button className="pill sm">Button</button>
        <button className="outline sm">Button</button>
        <button className="outline sm pill">Button</button>
        <button className="outline lg square">Button</button>
      </div>
    </>
  );
}

export default App;
