import React, { createContext, useReducer } from 'react';
import actions from './actionTypes';

const initialState = {
    search: '',
    items: [],
    categories: [],
    itemDetail: {},
    isLoading: false,
    hasBeenFetched: false
};

export const Store = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SEARCH_TEXT:
            return { ...state, search: action.payload };
        case actions.SEARCH_RESULT:
            return { ...state, items: action.payload };
        case actions.CATEGORIES:
            return { ...state, categories: action.payload };
        case actions.DETAIL:
            return { ...state, itemDetail: action.payload };
        case actions.LOADING:
            return { ...state, isLoading: action.payload };
        case actions.FETCHED:
            return { ...state, hasBeenFetched: action.payload };
        default:
            return state;
    }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}