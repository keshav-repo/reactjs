import React, { useState } from "react";

function CounterFn() {
    const [state, setState] = useState(0);
    let increment = () => {
        setState(state + 1);
    }
    let decrement = () => {
        setState(state - 1);
    }
    return (
        <div>
            <h1>
                The current count is :{" "}
                {state}
            </h1>
            <button onClick={increment}>
                Increase
            </button>
            <button onClick={decrement}>
                Decrease
            </button>
        </div>
    );
}

export default CounterFn;
