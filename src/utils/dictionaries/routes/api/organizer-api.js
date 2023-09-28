import Environment from "../../config/Environment";

export default function() {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.DEV:
            host = 'http://127.0.0.1:8080/'
    }

    return {
        wallet: {
            fetch: {
                one: host + 'api/finance/wallet/{walletId}',
                all: host + 'api/finance/wallet'
            }
        }
    };
}