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
            },
            store: {
                one: host + 'api/finance/wallet'
            }
        },
        walletTransaction: {
            fetch: {
                all: host + 'api/finance/wallet/{walletId}/transaction?perPage={perPage}&page={page}'
            },
            store: {
                one: host + 'api/finance/wallet/{walletId}/transaction'
            }
        },
        expenseCategory: {
          store: {
              one: host + 'api/finance/expense/category'
          },
          fetch: {
              all: host + 'api/finance/expense/category'
          }
        },
        currency: {
            fetch: {
                all: host + 'api/finance/currency'
            }
        },
        expense: {
            store: {
                one: host + 'api/finance/expense'
            }
        }
    };
}