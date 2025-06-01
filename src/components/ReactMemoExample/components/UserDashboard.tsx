import { useCallback, useState } from "react";
import UserList from "./UserList";

const UserDashboard = () => {
    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<string[]>(['John', 'Jane', 'Jim', 'Jill']);

    const addUser = useCallback(() => {
        setUsers(prev => [...prev, `User ${prev.length + 1}`]);
    }, []);

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

    const buttonStyle = {
        marginTop: "20px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }
    const pStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
    }

    return (
        <div style={containerStyle as React.CSSProperties}>
            <h1 style={headingStyle as React.CSSProperties}>User Dashboard</h1>
            <p style={pStyle as React.CSSProperties}>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={buttonStyle as React.CSSProperties}>Increase Count</button>
            <UserList users={users} addUser={addUser} />
        </div>
    )
}

export default UserDashboard;