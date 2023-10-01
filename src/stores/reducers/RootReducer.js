import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import UserReducer from "./user/UserReducer";
import WalletReducer from "./wallet/WalletReducer";
import WalletTransactionReducer from "./walletTransaction/WalletTransactionReducer";
import CurrencyReducer from "./currency/CurrencyReducer";


const rootReducer = combineReducers({
    data: DataReducer,
    user: UserReducer,
    wallet: WalletReducer,
    walletTransaction: WalletTransactionReducer,
    currency: CurrencyReducer
});

export default rootReducer;
