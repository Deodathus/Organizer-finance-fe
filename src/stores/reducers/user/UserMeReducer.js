

import FetchMe from "../../../services/user/FetchMe";
import UserActionCreator from "../../actions/user/UserActionCreator";
import Session from "../../../utils/dictionaries/session";

function fetchMe(action) {
    return async function fetchMeThunk(dispatch, getState) {
        const apiToken = action.payload;

        if (apiToken !== '') {
            await FetchMe(apiToken)
                .then(response => {
                    dispatch(UserActionCreator.fetchMeFinished(
                        response.data.me._user_id,
                        response.data.me._email,
                        response.data.me._token,
                        response.data.me._refresh_token,
                    ));
                })
                .catch(error => {
                    console.log(error);
                    dispatch(UserActionCreator.fetchMeError(error));
                });
        }
    }
}

function fetchMeFinished(state, action) {
    return {
        ...state,
        me: {
            ...state.me,
            userId: action.payload.userId,
            email: action.payload.email,
            refreshToken: action.payload.refreshToken,
        }
    };
}

function fetchMeError(state, action) {
    sessionStorage.setItem(Session.SESSION_STORAGE_API_TOKEN_KEY, '');

    return {
        ...state,
        me: {}
    }
}

export default {
    fetchMe,
    fetchMeFinished,
    fetchMeError
};