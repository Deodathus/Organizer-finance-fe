import Types from "../../../utils/dictionaries/action/Types";

function resetStoreWalletTransactionStatus() {
    return {
        type: Types.WALLET_TRANSACTION.STORE.RESET_STATUS,
        payload: {}
    };
}

function storeWalletTransactionSuccess() {
    return {
        type: Types.WALLET_TRANSACTION.STORE.SUCCESS,
        payload: {}
    }
}

function storeWalletTransactionError() {
    return {
        type: Types.WALLET_TRANSACTION.STORE.ERROR,
        payload: {},
    }
}

export default {
    resetStoreWalletTransactionStatus,
    storeWalletTransactionSuccess,
    storeWalletTransactionError
};
