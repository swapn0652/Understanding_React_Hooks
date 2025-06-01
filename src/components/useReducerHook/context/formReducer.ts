import type { IState, Action } from "./type";

export const initialState: IState = {
    name: "",
    email: "",
    password: "",
    errors: {},
    isSubmitting: false,
};

export function formReducer(state: IState, action: Action): IState {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        case "SET_ERROR":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload.field]: action.payload.message,
                },
            };
        case "SUBMIT_START":
            return {
                ...state,
                isSubmitting: true,
            };
        case "SUBMIT_SUCCESS":
            return initialState;
        case "SUBMIT_FAILURE":
            return {
                ...state,
                isSubmitting: false,
            };
        default:
            return state;
    }
}