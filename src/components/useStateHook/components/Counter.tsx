import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: '1px solid black',
        cursor: 'pointer',
        margin: '10px',
    }

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    }
    
    return (
        <div style={containerStyle as React.CSSProperties}>
            <h1>Counter</h1>
            <p>{count}</p>
            <div style={buttonContainerStyle as React.CSSProperties}>
                <button style={buttonStyle} onClick={handleIncrement}>Increment</button>
                <button style={buttonStyle} onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}
