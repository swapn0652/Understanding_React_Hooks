import { useDeferredValue, useState } from "react";

const bigUserList = Array.from({length: 10000}, (_, index) => ({
    id: index,
    name: `User ${index}`,
    email: `user${index}@example.com`,
}));

const UserListDeferred = () => {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const filteredUsers = bigUserList.filter((user) =>
        user.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }; 

    const containerStyle = {
        margin: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    const inputStyle = {
        marginBottom: "10px",
        padding: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    const listStyle = {
        marginTop: "10px",
        padding: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    const listItemStyle = {
        marginBottom: "5px",
        padding: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    return (
        <div style={containerStyle as React.CSSProperties}>
            <input type="text" value={query} onChange={handleChange} style={inputStyle as React.CSSProperties} />
            <ul style={listStyle as React.CSSProperties}>
                {filteredUsers.map((user) => (
                    <li key={user.id} style={listItemStyle as React.CSSProperties}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
} 

export default UserListDeferred;