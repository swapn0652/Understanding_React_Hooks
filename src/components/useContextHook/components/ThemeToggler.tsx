import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme();

    const stylesForButton = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: theme === 'light' ? '1px solid black' : '1px solid white',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        margin: '20px',
    }

    return (
        <button style={stylesForButton} onClick={toggleTheme}>Toggle Theme</button>
    )
}

export default ThemeToggler;