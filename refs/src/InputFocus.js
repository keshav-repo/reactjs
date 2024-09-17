import React, { Component } from 'react';

class InputFocus extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus(); // Access the DOM element and set focus
    };

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.focusInput}>Focus Input</button>
            </div>
        );
    }
}

export default InputFocus;
