import React, { useRef, useState } from 'react';

function AnimatedBoxFC() {
    const boxRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = () => {
        if (!isAnimating) {
            boxRef.current.style.transition = 'transform 0.5s ease-in-out, background-color 0.5s ease';
            boxRef.current.style.transform = 'translateX(200px)';
            boxRef.current.style.backgroundColor = 'lightgreen';
            setIsAnimating(true);
        } else {
            boxRef.current.style.transform = 'translateX(0)';
            boxRef.current.style.backgroundColor = 'lightcoral';
            setIsAnimating(false);
        }
    };

    return (
        <div>
            <div
                ref={boxRef}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'lightcoral',
                }}
            ></div>
            <button onClick={startAnimation} style={{ marginTop: '20px' }}>
                {isAnimating ? 'Reset Animation' : 'Start Animation'}
            </button>
        </div>
    );
}

export default AnimatedBoxFC;
