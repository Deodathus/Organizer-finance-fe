
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
        FETCH: {
            ONE_FINISHED: 'WALLET|ONE_FETCH_FINISHED',
            ONE_ERROR: 'WALLET|ONE_FETCH_ERROR',
            ONE_FETCH: 'WALLET|ONE_FETCH',
            ALL_FETCH: 'WALLET|ALL_FETCH',
            ALL_ERROR: 'WALLET|ALL_FETCH_ERROR',
            ALL_FINISHED: 'WALLET|ALL_FETCH_FINISHED'
        },
    }
};

export default Types;
