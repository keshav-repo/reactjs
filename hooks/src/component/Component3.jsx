import { useContext } from "react";
import { counterContext } from "../context/Context";

function Component3(){

    const {counter, setCounter} = useContext(counterContext);
    return (
        <>
          <h3>In component 3, count {counter}</h3>
          <button onClick={()=> setCounter(counter+1)}>BUTTON II</button>
        </>
    )
}
export default Component3;
