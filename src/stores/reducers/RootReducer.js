import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import UserReducer from "./user/UserReducer";
import WalletReducer from "./wallet/WalletReducer";


const rootReducer = combineReducers({
    data: DataReducer,
    user: UserReducer,
    wallet: WalletReducer
});

export default rootReducer;
