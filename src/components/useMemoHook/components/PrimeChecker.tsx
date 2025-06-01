import { useMemo, useState } from "react";
import { isPrime } from "../utils/isPrime";

export const PrimeChecker = () => {
    const [number, setNumber] = useState<number>(0);
    const [count, setCount] = useState<number>(0);

    const primeStatus = useMemo(() => {
        return isPrime(number);
    }, [number]);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    }

    const headingStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "20px",
    }

    const inputStyle = {
        marginBottom: "20px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }

    const buttonStyle = {
        marginBottom: "20px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }

    const pStyle = {
        marginBottom: "20px",
        fontSize: "1.5rem",
        fontWeight: "bold",
    }

    return (
        <div style={containerStyle as React.CSSProperties}>
            <h1 style={headingStyle as React.CSSProperties}>Prime Checker</h1>
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(Number(e.target.value))} 
                placeholder="Enter a number" 
                style={inputStyle as React.CSSProperties}
            />
            <p style={pStyle as React.CSSProperties}>{number} is {primeStatus ? "Prime" : "Not Prime"}</p>

            <button onClick={() => setCount(count + 1)} style={buttonStyle as React.CSSProperties}>
                Re-render without changing the number
            </button>
            <p style={pStyle as React.CSSProperties}>Counter: {count}</p>
        </div>
    )
}