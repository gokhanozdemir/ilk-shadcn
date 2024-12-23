import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App dashed">
        <button className="sm">Button</button>
        <button>Button</button>
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
