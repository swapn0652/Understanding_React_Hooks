import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [time, setTime] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerActive) {
            interval = setInterval(() => {
                console.log('Timer is running: ', time);
                setTime(time + 1);
            }, 1000);
        }
        return () => {
            console.log('Clearing interval: ', time);
            clearInterval(interval);
        }
    }, [isTimerActive, time]);

    const handleStart = () => {
        setIsTimerActive(true);
    }

    const handleStop = () => {
        setIsTimerActive(false);
    }

    const handleReset = () => {
        setTime(0);
        setIsTimerActive(false);
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
            <h1>Timer</h1>
            <p>{time}</p>
            <div style={buttonContainerStyle as React.CSSProperties}>
                <button style={buttonStyle} onClick={handleStart}>Start</button>
                <button style={buttonStyle} onClick={handleStop}>Stop</button>
                <button style={buttonStyle} onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}