import CurrencyFetchReducer from "./CurrencyFetchReducer";
import Types from "../../../utils/dictionaries/action/Types";

export default function CurrencyReducer(state = [], action) {
    switch (action.type) {
        case Types.CURRENCY.FETCH.ALL_FINISHED:
            return CurrencyFetchReducer.fetchAllFinished(state, action);
        case Types.CURRENCY.FETCH.ALL_ERROR:
            return CurrencyFetchReducer.fetchAllError(state, action);
        default:
            break;
    }

    return state;
}
