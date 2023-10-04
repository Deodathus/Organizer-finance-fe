import Types from "../../../utils/dictionaries/action/Types";
import ExpenseCategoryStoreReducer from "./ExpenseCategoryStoreReducer";

export default function ExpenseCategoryReducer(state = [], action) {
    switch (action.type) {
        case Types.EXPENSE_CATEGORY.STORE.SUCCESS:
            return ExpenseCategoryStoreReducer.storeExpenseCategorySuccess(state, action);
        case Types.EXPENSE_CATEGORY.STORE.ERROR:
            return ExpenseCategoryStoreReducer.storeExpenseCategoryError(state, action);
        case Types.EXPENSE_CATEGORY.STORE.RESET_STATUS:
            return ExpenseCategoryStoreReducer.resetStoreExpenseCategoryStatus(state, action);
        default:
            break;
    }

    return state;
}
