import Component2 from "./Component2";

function Component1({ counter }) {
  return (
    <>
      <h3>Counter value in component 1: {counter}</h3>
      <Component2 counter={counter}/>
    </>
  );
}
export default Component1;
