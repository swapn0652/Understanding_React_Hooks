import { useState, useTransition } from "react";

const bigUserList = Array.from({length: 10000}, (_, index) => ({
    id: index,
    name: `User ${index}`,
    email: `user${index}@example.com`,
}));

const UserList = () => {
    const [query, setQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(bigUserList);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filtered = bigUserList.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredUsers(filtered);
        });
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} />
            {isPending && <p>Loading...</p>}
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;