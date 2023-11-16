import Types from "../../../utils/dictionaries/action/Types";
import ExpenseStoreReducer from "./ExpenseStoreReducer";
import ExpenseFetchReducer from "./ExpenseFetchReducer";

export default function ExpenseReducer(state = [], action) {
    switch (action.type) {
        case Types.EXPENSE.STORE.SUCCESS:
            return ExpenseStoreReducer.storeExpenseSuccess(state, action);
        case Types.EXPENSE.STORE.ERROR:
            return ExpenseStoreReducer.storeExpenseError(state, action);
        case Types.EXPENSE.STORE.RESET_STATUS:
            return ExpenseStoreReducer.resetStoreExpenseStatus(state, action);
        case Types.EXPENSE.FETCH.ALL_FINISHED:
            return ExpenseFetchReducer.fetchAllFinished(state, action);
        case Types.EXPENSE.FETCH.ALL_ERROR:
            return ExpenseFetchReducer.fetchAllError(state, action);
        default:
            break;
    }

    return state;
}
