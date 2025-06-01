export interface IState {
    name: string;
    email: string;
    password: string;
    errors: {
        name?: string;
        email?: string;
        password?: string;
    };
    isSubmitting: boolean;
}

export type Action =
    | { type: "UPDATE_FIELD"; payload: { field: keyof IState; value: string } }
    | { type: "SET_ERROR"; payload: { field: keyof IState; message: string } }
    | { type: "SUBMIT_START" }
    | { type: "SUBMIT_SUCCESS" }
    | { type: "SUBMIT_FAILURE"};