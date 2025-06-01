import { useReducer } from "react";
import { formReducer } from "../context/formReducer";
import { initialState } from "../context/formReducer";
import type { IState } from "../context/type";

const SignupForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "UPDATE_FIELD",
            payload: { field: e.target.name as keyof IState, value: e.target.value },
        });
    };

    const validate = () => {
        if(!state.name) {
            dispatch({
                type: "SET_ERROR",
                payload: { field: "name", message: "Name is required" },
            });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!emailRegex.test(state.email)) {
            dispatch({
                type: "SET_ERROR",
                payload: { field: "email", message: "Invalid email address" },
            });
            return false;
        }

        if(state.password.length < 8) {
            dispatch({
                type: "SET_ERROR",
                payload: { field: "password", message: "Password must be at least 8 characters long" },
            });
            return false;
        }

        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!validate()) return;

        dispatch({ type: "SUBMIT_START" });

        try {
            // Simulate API call
            setTimeout(() => {
                dispatch({ type: "SUBMIT_SUCCESS" });
            }, 1000);
        } catch (error) {
            console.error("Error submitting form:", error);
            dispatch({ type: "SUBMIT_FAILURE" });
        }
    };

    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        margin: '0 auto',
        justifyContent: 'center',
        height: '100vh',
        width: '40vw',
    }

    const inputStyle = {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    }

    const labelStyle = {
        fontSize: '14px',
        fontWeight: 'bold',
    }

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        marginTop: '4px',
    }

    const buttonStyle = {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
    }   

    const fieldContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    }

    return (
        <form style={formContainerStyle as React.CSSProperties} onSubmit={handleSubmit}>
            <div style={fieldContainerStyle as React.CSSProperties}>
                <label style={labelStyle as React.CSSProperties} htmlFor="name">Name</label>
                <input style={inputStyle as React.CSSProperties} type="text" id="name" name="name" value={state.name} onChange={handleChange} />
                { state.errors.name && <div style={errorStyle as React.CSSProperties}>{state.errors.name}</div> }
            </div>
            <div style={fieldContainerStyle as React.CSSProperties}>
                <label style={labelStyle as React.CSSProperties} htmlFor="email">Email</label>
                <input style={inputStyle as React.CSSProperties} type="email" id="email" name="email" value={state.email} onChange={handleChange} />
                { state.errors.email && <div style={errorStyle as React.CSSProperties}>{state.errors.email}</div> }
            </div>
            <div style={fieldContainerStyle as React.CSSProperties}>
                <label style={labelStyle as React.CSSProperties} htmlFor="password">Password</label>
                <input style={inputStyle as React.CSSProperties} type="password" id="password" name="password" value={state.password} onChange={handleChange} />
                { state.errors.password && <div style={errorStyle as React.CSSProperties}>{state.errors.password}</div> }
            </div>
            <button style={buttonStyle as React.CSSProperties} type="submit" disabled={state.isSubmitting}>
                {state.isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    )
};

export default SignupForm;