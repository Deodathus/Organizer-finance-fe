import Types from "../../../utils/dictionaries/action/Types";

function storeWallet(name, balance, currencyCode) {
    return {
        type: Types.WALLET.STORE.STORE,
        payload: {
            name,
            balance,
            currencyCode
        }
    }
}

export default {
    storeWallet
};
