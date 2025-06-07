import { useLayoutEffect, useRef, useState } from "react";

const BoxWithSize = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [boxSize, setBoxSize] = useState<{width: number, height: number}>({width: 0, height: 0});

    const measureBox = () => {
        if (boxRef.current) {
            const {width, height} = boxRef.current.getBoundingClientRect();
            setBoxSize({width, height});
        }
    }

    useLayoutEffect(() => {
        measureBox();
        window.addEventListener("resize", measureBox);
        return () => window.removeEventListener("resize", measureBox);
    }, []);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    };

    const boxStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        padding: "20px",
        borderRadius: "10px",
        margin: "10px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
    };  

    const pStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px",
    };

    return (
        <div style={containerStyle as React.CSSProperties}>
            <div ref={boxRef} style={boxStyle as React.CSSProperties}>Resize the window to see me measure myself</div>
            <p style={pStyle as React.CSSProperties}>Width: {boxSize.width.toFixed(0)}px</p>
            <p style={pStyle as React.CSSProperties}>Height: {boxSize.height.toFixed(0)}px</p>
        </div>
    )
}

export default BoxWithSize;