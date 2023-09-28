
import axios from "axios";
import Session from "./dictionaries/session";

function get(url, body = {}, token = null) {
    if (!token) {
        token = sessionStorage.getItem(Session.SESSION_STORAGE_API_TOKEN_KEY);
    }
    return axios.get(url, {
        params: body,
        headers: {
            'X-Auth-Token' : token
        }
    });
}

function post(url, body, token = null, withFiles = true) {
    return axios.post(url,
        JSON.stringify(body),
        {
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
    });
}

export default {
    get,
    post
}