import { useState } from "react";
import Component1 from "./component/Component1";
import { counterContext } from "./context/Context";

import ProductDetails from "./component/Product";

import Square from "./component/Square";

import Counter from "./component/Counter";
import Trans from "./component/Trans";

import WithoutTrans from "./component/withoutTrans";
import DefferedComponent from "./component/DefferedDemo";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {/* <counterContext.Provider value={{ counter, setCounter }}>
        <h1>In Appjs counter : {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <Component1 />
      </counterContext.Provider>

      <ProductDetails productId={2} />

      <Square />

      <hr /> 

      <Counter /> 

      <Trans /> */}

      {/* <WithoutTrans /> */}

      <DefferedComponent />

    </>
  );
}

export default App;
