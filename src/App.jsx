import { useState } from "react";
import { Button } from "@/components/ui/Button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-4 dashed">
        <h1 className="text-3xl font-bold underline">Dodokod</h1>
        <p>üye oldun mu? :)</p>
        <div className="flex flex-wrap md:flex-row items-start gap-3 border-2 border-dashed border-primary p-4">
          <Button>Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="destructive">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="outline">Button</Button>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
          <Button shape="square">Button</Button>
          <Button shape="pill">Button</Button>
          <Button shape="pill" variant="outline" size="sm">
            Button
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
