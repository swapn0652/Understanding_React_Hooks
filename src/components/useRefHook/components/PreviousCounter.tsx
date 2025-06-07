import { useState, useRef, useEffect } from "react";

const PreviousCounter = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const previousCountStyle = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const currentCountStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle as React.CSSProperties}>
      <h1 style={previousCountStyle as React.CSSProperties}>Previous Counter: {prevCountRef.current}</h1>
      <h1 style={currentCountStyle as React.CSSProperties}  >Current Counter: {count}</h1>
      <button style={buttonStyle as React.CSSProperties} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousCounter; 