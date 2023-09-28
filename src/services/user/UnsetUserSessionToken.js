import Session from "../../utils/dictionaries/session";

export default function UnsetUserSessionToken() {
    sessionStorage.setItem(Session.SESSION_STORAGE_API_TOKEN_KEY, '');
}
