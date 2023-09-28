import Types from "../../../utils/dictionaries/action/Types";


function fetchAll(walletId) {
    return {
        type: Types.WALLET_TRANSACTION.FETCH.ALL_FETCH,
        payload: {
            walletId
        }
    };
}

function fetchAllError(error) {
    return {
        type: Types.WALLET_TRANSACTION.FETCH.ALL_ERROR,
        error: true,
        payload: {
            error
        }
    };
}

function fetchAllFinished(transactions) {
    return {
        type: Types.WALLET_TRANSACTION.FETCH.ALL_FINISHED,
        payload: transactions
    };
}

export default {
    fetchAll,
    fetchAllError,
    fetchAllFinished
};
