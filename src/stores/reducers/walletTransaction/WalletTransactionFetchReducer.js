
import FetchTransactions from "../../../services/wallet/FetchTransactions";
import WalletTransactionFetchActionCreator from "../../actions/walletTransaction/WalletTransactionFetchActionCreator";
import headers from "../../../utils/dictionaries/headers";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        await FetchTransactions(action.payload.walletId, action.payload.page, action.payload.perPage)
            .then(response => {
                dispatch(WalletTransactionFetchActionCreator.fetchAllFinished(
                    response.data,
                    response.headers[headers.TOTAL_COUNT])
                );
            }).catch(error => {
                dispatch(WalletTransactionFetchActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllFinished(state, action) {
    const transactions = action.payload.transactions.items;

    if (transactions.length > 0) {
        let walletId = transactions[0].walletId;

        return {
            ...state,
            [walletId]: {
                elements: transactions,
                total: action.payload.total
            }
        };
    }

    return state;
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
