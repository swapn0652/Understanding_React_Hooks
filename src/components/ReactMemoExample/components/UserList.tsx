import React from "react";
import type { IUserList } from "../types";

const UserList = ({ users, addUser }: IUserList) => {
    console.log("Rendering UserList");

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

    const ulStyle = {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    }

    const liStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
    }

    const buttonStyle = {
        marginTop: "20px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }
    return (
        <div style={containerStyle as React.CSSProperties}>
            <h2 style={headingStyle as React.CSSProperties}>User List</h2>
            <ul style={ulStyle as React.CSSProperties}>
                {users.map((user, index) => (
                    <li key={index} style={liStyle as React.CSSProperties}>{user}</li>
                ))}
            </ul>
            <button onClick={addUser} style={buttonStyle as React.CSSProperties}>Add User</button>
        </div>
    )
}

export default React.memo(UserList);