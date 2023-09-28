import Types from "../../../utils/dictionaries/action/Types";
import WalletTransactionFetchReducer from "./WalletTransactionFetchReducer";

export default function WalletTransactionReducer(state = [], action) {
    switch (action.type) {
        case Types.WALLET_TRANSACTION.FETCH.ALL_FINISHED:
            return WalletTransactionFetchReducer.fetchAllFinished(state, action);
        case Types.WALLET_TRANSACTION.FETCH.ALL_ERROR:
            return WalletTransactionFetchReducer.fetchAllError(state, action);
        default:
            break;
    }

    return state;
}
