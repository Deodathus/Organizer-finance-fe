import Types from "../../../utils/dictionaries/action/Types";

function resetStoreExpenseStatus() {
    return {
        type: Types.EXPENSE.STORE.RESET_STATUS,
        payload: {}
    };
}

function storeExpenseSuccess() {
    return {
        type: Types.EXPENSE.STORE.SUCCESS,
        payload: {}
    }
}

function storeExpenseError() {
    return {
        type: Types.EXPENSE.STORE.ERROR,
        payload: {},
    }
}

export default {
    resetStoreExpenseStatus,
    storeExpenseSuccess,
    storeExpenseError
};
