
export const types = {
    SET_ALL_COINS: 'SET_ALL_COINS',
    SET_TOP_COINS: 'SET_TOP_COINS',
}

export const coinInitialState = {
    allCoins: [],
    topCoins: [],
}

export const coinReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALL_COINS':
            return {
                ...state,
                allCoins: action.data
            }
        case 'SET_TOP_COINS':
            return {
                ...state,
                topCoins: action.data
            }
        default:
            return state;
    }
}
