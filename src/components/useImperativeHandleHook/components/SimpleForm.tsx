import { useRef } from "react";
import type { FancyInputHandle } from "../types";
import FancyInput from "./FancyInput";

const SimpleForm = () => {
    const fancyInputRef = useRef<FancyInputHandle>(null);

    const handleFocus = () => {
        if (fancyInputRef.current) {
            fancyInputRef.current.focus();
        }
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    };

    const buttonStyle = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
    };

    return (
        <div style={containerStyle as React.CSSProperties}>
            <FancyInput ref={fancyInputRef} />
            <button style={buttonStyle as React.CSSProperties} onClick={handleFocus}>Focus Child Input from Parent</button>
        </div>
    );
};

export default SimpleForm;