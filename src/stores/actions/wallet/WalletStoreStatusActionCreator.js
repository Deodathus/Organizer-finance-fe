import Types from "../../../utils/dictionaries/action/Types";

function resetStoreWalletStatus() {
    return {
        type: Types.WALLET.STORE.RESET_STATUS,
        payload: {}
    };
}

function storeWalletSuccess() {
    return {
        type: Types.WALLET.STORE.SUCCESS,
        payload: {}
    }
}

function storeWalletError() {
    return {
        type: Types.WALLET.STORE.ERROR,
        payload: {},
    }
}

export default {
    resetStoreWalletStatus,
    storeWalletSuccess,
    storeWalletError
};
