import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;  // No state update required
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default Counter;

