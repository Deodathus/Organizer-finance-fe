import StoreWallet from "../../../services/wallet/StoreWallet";
import Status from "../../../utils/dictionaries/action/Status";
import WalletCreateStatusActionCreator from "../../actions/wallet/WalletStoreStatusActionCreator";

function storeWallet(action) {
    return async function storeWalletThunk(dispatch, getState) {
        await StoreWallet(
            action.payload.name,
            action.payload.balance,
            action.payload.currencyCode
        ).then(response => {
            if (response.status === 201) {
                dispatch(WalletCreateStatusActionCreator.storeWalletSuccess());
            } else {
                dispatch(WalletCreateStatusActionCreator.storeWalletError());
            }
        }).catch(error => {
            dispatch(WalletCreateStatusActionCreator.storeWalletError());
        });
    }
}

function storeWalletSuccess(state) {
    return {
        ...state,
        process: {
            store: Status.success
        }
    };
}

function storeWalletError(state) {
    return {
        ...state,
        process: {
            store: Status.error
        }
    };
}

function resetStoreWalletStatus(state) {
    return {
        ...state,
        process: {
            store: Status.idle
        }
    };
}

export default {
    storeWallet,
    storeWalletSuccess,
    storeWalletError,
    resetStoreWalletStatus
};
