import FetchExpenseCategories from "../../../services/expense/FetchExpenseCategories";
import ExpenseCategoryFetchActionCreator from "../../actions/expenseCategory/ExpenseCategoryFetchActionCreator";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        await FetchExpenseCategories()
            .then(response => {
                dispatch(ExpenseCategoryFetchActionCreator.fetchAllFinished(response.data.items));
            }).catch(error => {
                dispatch(ExpenseCategoryFetchActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllFinished(state, action) {
    const expenseCategories = action.payload;

    return {
        ...state,
        elements: expenseCategories
    };
}

function fetchAllError(state, action) {
    console.log(action.payload.error);

    return state;
}

export default {
    fetchAll,
    fetchAllFinished,
    fetchAllError
};
