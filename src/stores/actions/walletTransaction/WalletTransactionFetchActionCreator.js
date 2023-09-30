import Types from "../../../utils/dictionaries/action/Types";
import PaginatorEnum from "../../../utils/dictionaries/config/PaginatorEnum";


function fetchAll(walletId, page = 1, perPage = PaginatorEnum.WALLET_TRANSACTION_PER_PAGE) {
    return {
        type: Types.WALLET_TRANSACTION.FETCH.ALL_FETCH,
        payload: {
            walletId,
            page,
            perPage
        }
    };
}

function fetchAllError(error) {
    return {
        type: Types.WALLET_TRANSACTION.FETCH.ALL_ERROR,
        error: true,
        payload: {
            error
        }
    };
}

function fetchAllFinished(transactions, total) {
    return {
        type: Types.WALLET_TRANSACTION.FETCH.ALL_FINISHED,
        payload: {
            transactions: transactions,
            total: total
        }
    };
}

export default {
    fetchAll,
    fetchAllError,
    fetchAllFinished
};
