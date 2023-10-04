import Types from "../../../utils/dictionaries/action/Types";
import WalletTransactionFetchReducer from "./WalletTransactionFetchReducer";
import WalletTransactionStoreReducer from "./WalletTransactionStoreReducer";

export default function WalletTransactionReducer(state = [], action) {
    switch (action.type) {
        case Types.WALLET_TRANSACTION.FETCH.ALL_FINISHED:
            return WalletTransactionFetchReducer.fetchAllFinished(state, action);
        case Types.WALLET_TRANSACTION.FETCH.ALL_ERROR:
            return WalletTransactionFetchReducer.fetchAllError(state, action);
        case Types.WALLET_TRANSACTION.STORE.SUCCESS:
            return WalletTransactionStoreReducer.storeWalletTransactionSuccess(state, action);
        case Types.WALLET_TRANSACTION.STORE.ERROR:
            return WalletTransactionStoreReducer.storeWalletTransactionError(state, action);
        case Types.WALLET_TRANSACTION.STORE.RESET_STATUS:
            return WalletTransactionStoreReducer.resetStoreWalletTransactionStatus(state, action);
        default:
            break;
    }

    return state;
}
