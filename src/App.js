import logo from "./logo.svg";
import "./App.css";
import Timer from "./Component/Timer";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      {toggle ? <p>Alternate component</p> : <Timer />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
