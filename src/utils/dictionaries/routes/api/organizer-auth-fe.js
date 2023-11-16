import Environment from "../../config/Environment";
import AppUrl from "../../config/AppUrl";

export default function () {
    let host;

    switch (process.env.REACT_APP_ENV) {
        default:
        case Environment.DEV:
            host = 'http://127.0.0.1:3002'
            break;
        case Environment.PROD:
            host = 'https://auth.lil-develo.com'
            break;
    }

    return {
        signin: host + '/?redirectAuthUrl=' + AppUrl(),
        logout: host + '/?logout=true&redirectAuthUrl=' + AppUrl()
    };
}