import { useState } from "react";
import Component1 from "./component/Component1";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div >
      <h1>In Appjs counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Component1 counter={counter} />
    </div >
  );
}

export default App;
