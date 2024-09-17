import React, { Component } from 'react';

class AnimatedBox extends Component {
    constructor(props) {
        super(props);
        this.boxRef = React.createRef();
        this.state = {
            isAnimating: false,
        };
    }

    startAnimation = () => {
        const { isAnimating } = this.state;
        if (!isAnimating) {
            this.boxRef.current.style.transition = 'transform 0.5s ease-in-out, background-color 0.5s ease';
            this.boxRef.current.style.transform = 'translateX(200px)';
            this.boxRef.current.style.backgroundColor = 'lightgreen';
        } else {
            this.boxRef.current.style.transform = 'translateX(0)';
            this.boxRef.current.style.backgroundColor = 'lightcoral';
        }
        this.setState({ isAnimating: !isAnimating });
    };

    render() {
        const { isAnimating } = this.state;

        return (
            <div>
                <div
                    ref={this.boxRef}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'lightcoral',
                    }}
                ></div>
                <button onClick={this.startAnimation} style={{ marginTop: '20px' }}>
                    {isAnimating ? 'Reset Animation' : 'Start Animation'}
                </button>
            </div>
        );
    }
}

export default AnimatedBox;

