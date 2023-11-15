import Types from "../../../utils/dictionaries/action/Types";

function fetchAll() {
    return {
        type: Types.EXPENSE_CATEGORY.FETCH.ALL_FETCH,
        payload: {}
    };
}

function fetchAllError(error) {
    return {
        type: Types.EXPENSE_CATEGORY.FETCH.ALL_ERROR,
        payload: {
            error
        },
        error: true
    };
}

function fetchAllFinished(expenseCategories) {
    return {
        type: Types.EXPENSE_CATEGORY.FETCH.ALL_FINISHED,
        payload: expenseCategories
    }
}

export default {
    fetchAll,
    fetchAllFinished,
    fetchAllError
};
