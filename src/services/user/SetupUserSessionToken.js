import Session from "../../utils/dictionaries/session";

export default function SetupUserSessionToken(token) {
    sessionStorage.setItem(Session.SESSION_STORAGE_API_TOKEN_KEY, token);
}
