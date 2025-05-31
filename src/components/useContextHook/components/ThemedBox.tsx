import { useTheme } from "../context/ThemeContext";

const ThemedBox = () => {
    const { theme } = useTheme();

    const styles = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: theme === 'light' ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : '0 0 10px 0 rgba(255, 255, 255, 0.1)',
        border: theme === 'light' ? '1px solid black' : '1px solid white',
    }

    return (
        <div style={styles}>
            This box is themed with {theme} theme.
        </div>
    )
}

export default ThemedBox;