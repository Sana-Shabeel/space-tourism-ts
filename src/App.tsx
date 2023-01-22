import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(2);

  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl font-bold underline">SPACE TOURISM</h1>
    </div>
  );
}

export default App;
