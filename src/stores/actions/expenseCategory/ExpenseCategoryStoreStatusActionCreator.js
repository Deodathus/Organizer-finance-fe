import Types from "../../../utils/dictionaries/action/Types";

function resetStoreExpenseCategoryStatus() {
    return {
        type: Types.EXPENSE_CATEGORY.STORE.RESET_STATUS,
        payload: {}
    };
}

function storeExpenseCategorySuccess() {
    return {
        type: Types.EXPENSE_CATEGORY.STORE.SUCCESS,
        payload: {}
    }
}

function storeExpenseCategoryError() {
    return {
        type: Types.EXPENSE_CATEGORY.STORE.ERROR,
        payload: {},
    }
}

export default {
    resetStoreExpenseCategoryStatus,
    storeExpenseCategorySuccess,
    storeExpenseCategoryError
};
