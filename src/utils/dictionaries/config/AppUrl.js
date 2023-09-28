import Environment from "./Environment";

export default function AppUrl() {
    let appUrl;

    switch (process.env.REACT_APP_ENV) {
        case Environment.DEV:
            appUrl = 'http://127.0.0.1:3003'
    }

    return appUrl;
}
