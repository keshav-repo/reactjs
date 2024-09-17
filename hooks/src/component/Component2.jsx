import Component3 from "./Component3";

function Component2({counter}){
    return (
        <>
          <h3>In component 2: {counter}</h3>
          <Component3 counter={counter}/>
        </>
    )
}
export default Component2;
