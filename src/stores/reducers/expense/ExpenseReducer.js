import Types from "../../../utils/dictionaries/action/Types";
import ExpenseStoreReducer from "./ExpenseStoreReducer";

export default function ExpenseReducer(state = [], action) {
    switch (action.type) {
        case Types.EXPENSE.STORE.SUCCESS:
            return ExpenseStoreReducer.storeExpenseSuccess(state, action);
        case Types.EXPENSE.STORE.ERROR:
            return ExpenseStoreReducer.storeExpenseError(state, action);
        case Types.EXPENSE.STORE.RESET_STATUS:
            return ExpenseStoreReducer.resetStoreExpenseStatus(state, action);
        default:
            break;
    }

    return state;
}
