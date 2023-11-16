import Types from "../../../utils/dictionaries/action/Types";
import PaginatorEnum from "../../../utils/dictionaries/config/PaginatorEnum";

function fetchAll(page = 1, perPage = PaginatorEnum.EXPENSE_PER_PAGE) {
    return {
        type: Types.EXPENSE.FETCH.ALL_FETCH,
        payload: {
            page,
            perPage
        }
    };
}

function fetchAllError(error) {
    return {
        type: Types.EXPENSE.FETCH.ALL_ERROR,
        error: true,
        payload: {
            error
        }
    };
}

function fetchAllFinished(expenses, total) {
    return {
        type: Types.EXPENSE.FETCH.ALL_FINISHED,
        payload: {
            expenses: expenses,
            total: total
        }
    };
}

export default {
    fetchAll,
    fetchAllError,
    fetchAllFinished
};
