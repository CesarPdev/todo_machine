import { useReducer, useEffect } from "react";

function useLocalStorageReducer(itemName, initialValue) {
    
    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
    
    const { sincronizedItem, error, loading, item } = state;
    
    // ACTIONS CREATORS
    const onError = (error) => dispatch({
        type: actionTypes.error,
        payload: error
    });
    const onSuccess = (item) => dispatch({
        type: actionTypes.success,
        payload: item
    });
    const onSave = (item) => dispatch({
        type: actionTypes.save,
        payload: item
    });
    const onSync = () => dispatch({
        type: actionTypes.sync
    });
    
    useEffect(() => {
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;    
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            };
            onSuccess(parsedItem);
        } catch(error) {
            onError(error);
        };
        }, 2000);
    }, [sincronizedItem, initialValue, itemName]);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            onSave(newItem);
        } catch(error) {
            onError(error);
        }
    };

    const sincronizeItem = () => {
        onSync();
    };

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    };
};

    const initialState = ({ initialValue }) => ({
        sincronizedItem: true,
        error: false,  
        loading: true,  
        item: initialValue
    });

    const actionTypes = {
        error: 'ERROR',
        success: 'SUCCESS',
        save: 'SAVE',
        sync: 'SYNC'
    };

    const reducerObject = (state, payload) => ({
        [actionTypes.error]: {
            ...state,
            error: true
        },
        [actionTypes.success]: {
            ...state,
            error: false,
            loading: false,
            sincronizedItem: true,
            item: payload
        },
        [actionTypes.save]: {
            ...state,
            item: payload

        },
        [actionTypes.sync]: {
            ...state,
            loading: true,
            sincronizedItem: false
        }
    });

    const reducer = (state, action) => {
        return reducerObject(state, action.payload)?.[action.type] || state;
    };

export { useLocalStorageReducer };