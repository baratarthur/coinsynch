import { createContext, useReducer } from "react";
import { authInitialState, authReducer, types } from "../reducers/user-info";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, authInitialState);

    const setSession = (user) => {
        dispatch({
            type: types.SET_USER,
            payload: user
        });
    }

    const clearSession = () => {
        dispatch({ type: types.CLEAR_USER });
    }

    const authContext = {
        user: auth.user,
        setSession,
        clearSession,
    }

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
}
