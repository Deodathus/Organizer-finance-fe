
const Types = {
    USER: {
        ME: {
            FETCH: {
                FINISHED: 'USER|ME_FETCH_FINISHED',
                ERROR: 'USER|ME_FETCH_ERROR',
                FETCH: 'USER|ME_FETCH',
            }
        },
    },
    WALLET: {
        STORE: {
            STORE: 'WALLET|STORE',
            RESET_STATUS: 'WALLET|RESET_STORE_STATUS',
            SUCCESS: 'WALLET|STORE_SUCCESS',
            ERROR: 'WALLET|STORE_ERROR'
        },
        FETCH: {
            ONE_FINISHED: 'WALLET|ONE_FETCH_FINISHED',
            ONE_ERROR: 'WALLET|ONE_FETCH_ERROR',
            ONE_FETCH: 'WALLET|ONE_FETCH',
            ALL_FETCH: 'WALLET|ALL_FETCH',
            ALL_ERROR: 'WALLET|ALL_FETCH_ERROR',
            ALL_FINISHED: 'WALLET|ALL_FETCH_FINISHED'
        },
    },
    WALLET_TRANSACTION: {
        FETCH: {
            ALL_FETCH: 'WALLET_TRANSACTION|ALL_FETCH',
            ALL_ERROR: 'WALLET_TRANSACTION|ALL_FETCH_ERROR',
            ALL_FINISHED: 'WALLET_TRANSACTION|ALL_FETCH_FINISHED'
        },
        STORE: {
            STORE: 'WALLET_TRANSACTION|STORE',
            RESET_STATUS: 'WALLET_TRANSACTION|RESET_STORE_STATUS',
            SUCCESS: 'WALLET_TRANSACTION|STORE_SUCCESS',
            ERROR: 'WALLET_TRANSACTION|STORE_ERROR'
        },
    },
    CURRENCY: {
        FETCH: {
            ALL_FETCH: 'CURRENCY|ALL_FETCH',
            ALL_ERROR: 'CURRENCY|ALL_ERROR',
            ALL_FINISHED: 'CURRENCY|ALL_FINISHED'
        }
    },
    EXPENSE_CATEGORY: {
        STORE: {
            STORE: 'EXPENSE_CATEGORY|STORE',
            RESET_STATUS: 'EXPENSE_CATEGORY|RESET_STORE_STATUS',
            SUCCESS: 'EXPENSE_CATEGORY|STORE_SUCCESS',
            ERROR: 'EXPENSE_CATEGORY|STORE_ERROR'
        },
        FETCH: {
            ALL_FETCH: 'EXPENSE_CATEGORY|ALL_FETCH',
            ALL_ERROR: 'EXPENSE_CATEGORY|ALL_ERROR',
            ALL_FINISHED: 'EXPENSE_CATEGORY|ALL_FINISHED'
        }
    },
    EXPENSE: {
        STORE: {
            STORE: 'EXPENSE|STORE',
            RESET_STATUS: 'EXPENSE|RESET_STORE_STATUS',
            SUCCESS: 'EXPENSE|STORE_SUCCESS',
            ERROR: 'EXPENSE|STORE_ERROR'
        },
    }
};

export default Types;
