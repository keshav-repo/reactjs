import { useState } from "react";
import Component1 from "./component/Component1";
import { counterContext } from "./context/Context";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <counterContext.Provider value={{ counter, setCounter }}>
        <h1>In Appjs counter : {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <Component1 />
      </counterContext.Provider>
    </>
  );
}

export default App;
