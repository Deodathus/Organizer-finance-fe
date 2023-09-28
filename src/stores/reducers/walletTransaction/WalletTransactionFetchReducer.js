
import FetchTransactions from "../../../services/wallet/FetchTransactions";
import WalletTransactionFetchActionCreator from "../../actions/walletTransaction/WalletTransactionFetchActionCreator";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        await FetchTransactions(action.payload.walletId)
            .then(response => {
                dispatch(WalletTransactionFetchActionCreator.fetchAllFinished(response.data));
            }).catch(error => {
                dispatch(WalletTransactionFetchActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllFinished(state, action) {
    const transactions = action.payload.items;
    const allTransactions = {...state.elements};

    if (transactions.length > 0) {
        let walletId = transactions[0].walletId;

        allTransactions[walletId] = transactions;
    }

    return {
        ...state,
        elements: allTransactions
    };
}

function fetchAllError(state, action) {
    console.log(action.payload.error)

    return state;
}

export default {
    fetchAll,
    fetchAllError,
    fetchAllFinished
};
