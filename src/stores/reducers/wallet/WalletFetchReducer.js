import FetchWallet from "../../../services/wallet/FetchWallet";
import WalletFetchActionCreator from "../../actions/wallet/WalletFetchActionCreator";
import FetchWallets from "../../../services/wallet/FetchWallets";

function fetchOne(action) {
    return async function fetchOneThunk(dispatch, getState) {
        await FetchWallet(action.payload.walletId).then(response => {
                dispatch(WalletFetchActionCreator.fetchOneFinished(
                    {
                        id: response.data.id,
                        name: response.data.name,
                        balance: response.data.balance,
                        currencyCode: response.data.currencyCode
                    }
                ));
            }).catch(error => {
                dispatch(
                    WalletFetchActionCreator.fetchOneError(error)
                );
            });
    }
}

function fetchOneFinished(state, action) {
    const wallet = action.payload.wallet;
    const allWallets = {...state.elements};

    allWallets[wallet.id] = wallet;

    return {
        ...state,
        elements: allWallets
    };
}

function fetchOneError(state, action) {
    console.log(action.payload.error);

    return state;
}

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        await FetchWallets()
            .then(response => {
                dispatch(WalletFetchActionCreator.fetchAllFinished(response.data));
            }).catch(error => {
                dispatch(WalletFetchActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllFinished(state, action) {
    const wallets = action.payload.items;
    let allWallets = [];

    wallets.forEach(wallet => {
        let walletId = wallet.id;

        allWallets[walletId] = wallet;
    });

    return {
        ...state,
        elements: allWallets
    };
}

function fetchAllError(state, action) {
    console.log(action.payload.error)

    return state;
}

export default {
    fetchOne,
    fetchOneFinished,
    fetchOneError,
    fetchAll,
    fetchAllFinished,
    fetchAllError
};
