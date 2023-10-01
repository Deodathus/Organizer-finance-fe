import FetchCurrencies from "../../../services/currency/FetchCurrencies";
import FetchCurrencyActionCreator from "../../actions/currency/CurrencyFetchActionCreator";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        await FetchCurrencies()
            .then(response => {
                dispatch(FetchCurrencyActionCreator.fetchAllFinished(response.data.items));
            }).catch(error => {
                dispatch(FetchCurrencyActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllFinished(state, action) {
    const currencies = action.payload;

    return {
        ...state,
        elements: currencies
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
