
import Status from "../../../utils/dictionaries/action/Status";
import StoreExpenseCategory from "../../../services/expense/StoreExpenseCategory";
import ExpenseCategoryStoreStatusActionCreator
    from "../../actions/expenseCategory/ExpenseCategoryStoreStatusActionCreator";

function storeExpenseCategory(action) {
    return async function storeExpenseCategoryThunk(dispatch, getState) {
        await StoreExpenseCategory(
            action.payload.name,
        ).then(response => {
            if (response.status === 201) {
                dispatch(ExpenseCategoryStoreStatusActionCreator.storeExpenseCategorySuccess());
            } else {
                dispatch(ExpenseCategoryStoreStatusActionCreator.storeExpenseCategoryError());
            }
        }).catch(error => {
            dispatch(ExpenseCategoryStoreStatusActionCreator.storeExpenseCategoryError());
        });
    }
}

function storeExpenseCategorySuccess(state) {
    return {
        ...state,
        process: {
            store: Status.success
        }
    };
}

function storeExpenseCategoryError(state) {
    return {
        ...state,
        process: {
            store: Status.error
        }
    };
}

function resetStoreExpenseCategoryStatus(state) {
    return {
        ...state,
        process: {
            store: Status.idle
        }
    };
}


export default {
    storeExpenseCategory,
    storeExpenseCategorySuccess,
    storeExpenseCategoryError,
    resetStoreExpenseCategoryStatus
};
