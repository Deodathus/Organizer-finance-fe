import Types from "../../../utils/dictionaries/action/Types";

function storeExpense(walletId, expenseCategoryId, amount, currencyCode, comment) {
    return {
        type: Types.EXPENSE.STORE.STORE,
        payload: {
            walletId,
            expenseCategoryId,
            amount,
            currencyCode,
            comment
        }
    }
}

export default {
    storeExpense
};
