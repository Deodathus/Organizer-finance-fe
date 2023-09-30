import Types from "../../../utils/dictionaries/action/Types";

function fetchOne(walletId) {
    return {
        type: Types.WALLET.FETCH.ONE_FETCH,
        payload: {
            walletId
        }
    };
}

function fetchOneError(error) {
    return {
        type: Types.WALLET.FETCH.ONE_ERROR,
        error: true,
        payload: {
            error
        }
    };
}

function fetchOneFinished(wallet) {
    return {
        type: Types.WALLET.FETCH.ONE_FINISHED,
        payload: {
            wallet
        }
    }
}

function fetchAll() {
    return {
        type: Types.WALLET.FETCH.ALL_FETCH,
        payload: {}
    };
}

function fetchAllError(error) {
    return {
        type: Types.WALLET.FETCH.ALL_ERROR,
        error: true,
        payload: {
            error
        }
    };
}

function fetchAllFinished(wallets) {
    return {
        type: Types.WALLET.FETCH.ALL_FINISHED,
        payload: wallets
    };
}

export default {
    fetchOne,
    fetchOneError,
    fetchOneFinished,
    fetchAll,
    fetchAllError,
    fetchAllFinished
}
