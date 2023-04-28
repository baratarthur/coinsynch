
export const types = {
    SET_USER: 'SET_USER',
    CLEAR_USER: 'CLEAR_USER',
}

export const authInitialState = {
    user: undefined
}

export function authReducer(state, action) {
    switch(action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case types.CLEAR_USER:
            return {
                ...state,
                user: undefined
            }
        default:
            return state;
    }
}
