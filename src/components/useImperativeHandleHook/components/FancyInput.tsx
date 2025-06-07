import { forwardRef, useImperativeHandle, useRef } from "react";
import type { FancyInputHandle } from "../types";

const FancyInput = forwardRef<FancyInputHandle, {}>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }));

    const fancyInputStyle = {
        width: "1000px",
        height: "30px",
        border: "1px solid #000",
        borderRadius: "5px",
        padding: "5px",
        margin: "10px",
    };
    return <input ref={inputRef} placeholder="Type something..." style={fancyInputStyle as React.CSSProperties} />;
});

export default FancyInput;