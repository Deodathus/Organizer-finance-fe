import Types from "../../../utils/dictionaries/action/Types";

function storeWalletTransaction(walletId, amount, currencyCode, transactionType) {
    return {
        type: Types.WALLET.STORE.STORE,
        payload: {
            walletId,
            amount,
            currencyCode,
            transactionType
        }
    }
}

export default {
    storeWalletTransaction
};
