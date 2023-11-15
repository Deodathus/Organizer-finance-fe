import Environment from "./Environment";

export default function AppUrl() {
    let appUrl;

    switch (process.env.REACT_APP_ENV) {
        default:
        case Environment.DEV:
            appUrl = 'http://127.0.0.1:3003'
        case Environment.PROD:
            appUrl = 'https://finance.lil-develo.com/'
    }

    return appUrl;
}
