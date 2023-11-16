
import headers from "../../../utils/dictionaries/headers";
import ExpenseFetchActionCreator from "../../actions/expense/ExpenseFetchActionCreator";
import FetchExpenses from "../../../services/expense/FetchExpenses";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        await FetchExpenses(action.payload.page, action.payload.perPage)
            .then(response => {
                dispatch(ExpenseFetchActionCreator.fetchAllFinished(
                    response.data,
                    response.headers[headers.TOTAL_COUNT])
                );
            }).catch(error => {
                dispatch(ExpenseFetchActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllFinished(state, action) {
    const expenses = action.payload.expenses.items;

    if (expenses.length > 0) {
        return {
            ...state,
            elements: expenses,
            total: action.payload.total
        };
    }

    return state;
}

function fetchAllError(state, action) {
    console.log(action.payload.error)

    return state;
}

export default {
    fetchAll,
    fetchAllError,
    fetchAllFinished
};
