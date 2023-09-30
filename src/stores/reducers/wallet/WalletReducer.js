import Types from "../../../utils/dictionaries/action/Types";
import WalletFetchReducer from "./WalletFetchReducer";

export default function WalletReducer(state = [], action) {
    switch (action.type) {
        case Types.WALLET.FETCH.ONE_FINISHED:
            return WalletFetchReducer.fetchOneFinished(state, action);
        case Types.WALLET.FETCH.ONE_ERROR:
            return WalletFetchReducer.fetchOneError(state, action);
        case Types.WALLET.FETCH.ALL_FINISHED:
            return WalletFetchReducer.fetchAllFinished(state, action);
        case Types.WALLET.FETCH.ALL_ERROR:
            return WalletFetchReducer.fetchAllError(state, action);
        default:
            break;
    }

    return state;
}
