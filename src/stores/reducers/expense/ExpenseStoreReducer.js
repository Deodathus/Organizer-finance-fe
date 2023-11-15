
import Status from "../../../utils/dictionaries/action/Status";
import StoreExpense from "../../../services/expense/StoreExpense";
import ExpenseStoreStatusActionCreator from "../../actions/expense/ExpenseStoreStatusActionCreator";

function storeExpense(action) {
    return async function storeWalletTransactionThunk(dispatch, getState) {
        await StoreExpense(
            action.payload.walletId,
            action.payload.expenseCategoryId,
            action.payload.amount,
            action.payload.currencyCode,
            action.payload.comment
        ).then(response => {
            if (response.status === 201) {
                dispatch(ExpenseStoreStatusActionCreator.storeExpenseSuccess());
            } else {
                dispatch(ExpenseStoreStatusActionCreator.storeExpenseError());
            }
        }).catch(error => {
            dispatch(ExpenseStoreStatusActionCreator.storeExpenseError());
        });
    }
}

function storeExpenseSuccess(state) {
    return {
        ...state,
        process: {
            store: Status.success
        }
    };
}

function storeExpenseError(state) {
    return {
        ...state,
        process: {
            store: Status.error
        }
    };
}

function resetStoreExpenseStatus(state) {
    return {
        ...state,
        process: {
            store: Status.idle
        }
    };
}


export default {
    storeExpense,
    storeExpenseSuccess,
    storeExpenseError,
    resetStoreExpenseStatus
};
