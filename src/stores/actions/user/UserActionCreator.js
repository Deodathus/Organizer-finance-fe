
import Types from '../../../utils/dictionaries/action/Types';

function fetchMe(userId) {
    return {
        type: Types.USER.ME.FETCH.FETCH,
        payload: userId
    };
}

function fetchMeFinished(userId, email, token, refreshToken) {
    return {
        type: Types.USER.ME.FETCH.FINISHED,
        payload: {
            userId,
            email,
            token,
            refreshToken
        }
    }
}

function fetchMeError(error) {
    return {
        type: Types.USER.ME.FETCH.ERROR,
        error: true,
        payload: error
    };
}

function signUp(login, email, password, repeatPassword, projectId) {
    return {
        type: Types.USER.SIGNUP.SIGNUP,
        payload: {
            login,
            email,
            password,
            repeatPassword,
            projectId
        }
    };
}

function signUpFinished() {
    return {
        type: Types.USER.SIGNUP.FINISHED,
        payload: {}
    };
}

function signUpError(error) {
    return {
        type: Types.USER.SIGNUP.ERROR,
        error: true,
        payload: error
    };
}

function signIn(login, password) {
    return {
        type: Types.USER.SIGNIN.SIGNIN,
        payload: {
            login,
            password
        }
    };
}

function signInFinished(token) {
    return {
        type: Types.USER.SIGNIN.FINISHED,
        payload: {
            token
        }
    };
}

function signInError(error) {
    return {
        type: Types.USER.SIGNUP.ERROR,
        error: true,
        payload: error
    };
}

export default {
    fetchMe,
    fetchMeFinished,
    fetchMeError,
    signUp,
    signUpFinished,
    signUpError,
    signIn,
    signInFinished,
    signInError
}
