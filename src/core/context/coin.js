import { createContext, useReducer } from 'react';
import { coinInitialState, coinReducer, types } from '../reducers/coin-info';
import { coinApi } from '../api';
import { PAGINATION_SIZE } from '../config/constants';

export const CoinContext = createContext();

export const CoinContextProvider = ({ children }) => {
    const [coins, dispatch] = useReducer(coinReducer, coinInitialState);

    const fetchCoinsData = async () => {
        const response = await coinApi.get('/tickers');
        const startItemPosition = 0 * PAGINATION_SIZE;
        const lastItemPosition = startItemPosition + PAGINATION_SIZE;

        dispatch({
            type: types.SET_ALL_COINS,
            data: response.data,
        });
        dispatch({
            type: types.SET_TOP_COINS,
            data: response.data.slice(startItemPosition, lastItemPosition)
        });
    }

    const seeMoreCoins = (numberOfItems) => {
        dispatch({
            type: types.SET_TOP_COINS,
            data: coins.allCoins.slice(0, numberOfItems),
        });
    }

    const contextValue = {
        coins,
        fetchCoinsData,
        seeMoreCoins
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )
}
