import Types from "../../../utils/dictionaries/action/Types";

function storeExpenseCategory(name) {
    return {
        type: Types.EXPENSE_CATEGORY.STORE.STORE,
        payload: {
            name
        }
    }
}

export default {
    storeExpenseCategory
};
