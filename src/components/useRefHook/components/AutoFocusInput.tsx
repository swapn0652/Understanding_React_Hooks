import { useRef } from "react";
import { useEffect } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputStyle = {
    width: "1000px",
    height: "30px",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "5px",
    margin: "10px",
  };

  return <input ref={inputRef} placeholder="Auto Focused Input" style={inputStyle} />;
};

export default AutoFocusInput;