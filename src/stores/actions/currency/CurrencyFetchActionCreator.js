import Types from "../../../utils/dictionaries/action/Types";

function fetchAll() {
    return {
        type: Types.CURRENCY.FETCH.ALL_FETCH,
        payload: {}
    };
}

function fetchAllError(error) {
    return {
        type: Types.CURRENCY.FETCH.ALL_ERROR,
        payload: {
            error
        },
        error: true
    };
}

function fetchAllFinished(currencies) {
    return {
        type: Types.CURRENCY.FETCH.ALL_FINISHED,
        payload: currencies
    }
}

export default {
    fetchAll,
    fetchAllFinished,
    fetchAllError
};
