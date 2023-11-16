
import Session from "../utils/dictionaries/session";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./reducers/RootReducer";
import Status from "../utils/dictionaries/action/Status";


let preloadState = {
    data: {
        general: {
            version: '0.8.0',
            year: 2023
        }
    },
    user: {
        me: {
            token: sessionStorage.getItem(Session.SESSION_STORAGE_API_TOKEN_KEY)
        }
    },
    wallet: {
        elements: [],
        process: {
            store: Status.idle
        }
    },
    walletTransaction: {
        process: {
            store: Status.idle
        }
    },
    currency: {
        elements: []
    },
    expenseCategory: {
        process: {
            store: Status.idle
        },
        elements: []
    },
    expense: {
        process: {
            store: Status.idle
        }
    }
}

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(RootReducer, preloadState, composedEnhancer);

export default store;