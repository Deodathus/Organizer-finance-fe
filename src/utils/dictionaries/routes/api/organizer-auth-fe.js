import Environment from "../../config/Environment";
import AppUrl from "../../config/AppUrl";

export default function () {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.DEV:
            host = 'http://127.0.0.1:3002'
    }

    return {
        signin: host + '/?redirectAuthUrl=' + AppUrl(),
        logout: host + '/?logout=true&redirectAuthUrl=' + AppUrl()
    };
}