
import Types from '../../../utils/dictionaries/action/Types'
import UserMeReducer from "./UserMeReducer";

export default function UserReducer(state = [], action) {
    switch (action.type) {
        case Types.USER.ME.FETCH.FINISHED:
            return UserMeReducer.fetchMeFinished(state, action);
        default:
            break;
    }

    return state;
}
