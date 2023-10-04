
import Status from "../../../utils/dictionaries/action/Status";
import StoreWalletTransaction from "../../../services/wallet/StoreWalletTransaction";
import WalletTransactionStoreStatusActionCreator
    from "../../actions/walletTransaction/WalletTransactionStoreStatusActionCreator";

function storeWalletTransaction(action) {
    return async function storeWalletTransactionThunk(dispatch, getState) {
        await StoreWalletTransaction(
            action.payload.walletId,
            action.payload.amount,
            action.payload.currencyCode,
            action.payload.transactionType
        ).then(response => {
            if (response.status === 201) {
                dispatch(WalletTransactionStoreStatusActionCreator.storeWalletTransactionSuccess());
            } else {
                dispatch(WalletTransactionStoreStatusActionCreator.storeWalletTransactionError());
            }
        }).catch(error => {
            dispatch(WalletTransactionStoreStatusActionCreator.storeWalletTransactionError());
        });
    }
}

function storeWalletTransactionSuccess(state) {
    return {
        ...state,
        process: {
            store: Status.success
        }
    };
}

function storeWalletTransactionError(state) {
    return {
        ...state,
        process: {
            store: Status.error
        }
    };
}

function resetStoreWalletTransactionStatus(state) {
    return {
        ...state,
        process: {
            store: Status.idle
        }
    };
}


export default {
    storeWalletTransaction,
    storeWalletTransactionSuccess,
    storeWalletTransactionError,
    resetStoreWalletTransactionStatus
};
