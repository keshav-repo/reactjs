import React, { useState, useDeferredValue } from "react";

const DefferedComponent = () => {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count, {
    timeoutMs: 1000,
  });
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <p>Deferred count: {deferredCount}</p>
    </div>
  );
};

export default DefferedComponent;
