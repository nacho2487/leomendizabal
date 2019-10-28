import axios from "axios";
import actions from "./actionTypes";

const DEFAULT_SEARCH_URL = '/api/items?q=';
const DEFAULT_ITEM_URL = '/api/items';

export const setSearchText = (searchText, dispatch) => {
    dispatch({
        type: actions.SEARCH_TEXT,
        payload: searchText
    });
}

export const setSearchResult = (searchResult, dispatch) => {
    dispatch({
        type: actions.SEARCH_RESULT,
        payload: searchResult
    });
}

export const setSearchCategories = (categories, dispatch) => {
    dispatch({
        type: actions.CATEGORIES,
        payload: categories
    });
}

export const setItemDetail = (detail, dispatch) => {
    dispatch({
        type: actions.DETAIL,
        payload: detail,
    });
}

export const setIsLoading = (isLoading, dispatch) => {
    dispatch({
        type: actions.LOADING,
        payload: isLoading,
    });
}

export const setHasBeenFetched = (hasBeenFetched, dispatch) => {
    dispatch({
        type: actions.FETCHED,
        payload: hasBeenFetched
    });
}

export const getItemsAction = (search, dispatch) => {
    const url = `${DEFAULT_SEARCH_URL}${search}`;
    
    setIsLoading(true, dispatch);
    axios.get(url)
        .then(response => {
            setSearchResult(response.data.items, dispatch);
            setSearchCategories(response.data.categories, dispatch);
        })
        .catch(error => console.log(error))
        .finally(() => {
            setIsLoading(false, dispatch);
        });
}

export const getItemDetailAction = (itemId, dispatch) => {
    const url = `${DEFAULT_ITEM_URL}/${itemId}`;

    setIsLoading(true, dispatch);
    axios.get(url)
        .then(response => {
            const { categories, ...item } = response.data;
            setItemDetail(item, dispatch);
            setSearchCategories(categories, dispatch);
            setHasBeenFetched(true, dispatch);
        })
        .catch(error => console.log(error))
        .finally(() => {
            setIsLoading(false, dispatch);
        })
}