import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import UserReducer from "./user/UserReducer";
import WalletReducer from "./wallet/WalletReducer";
import WalletTransactionReducer from "./walletTransaction/WalletTransactionReducer";
import CurrencyReducer from "./currency/CurrencyReducer";
import ExpenseCategoryReducer from "./expenseCategory/ExpenseCategoryReducer";
import ExpenseReducer from "./expense/ExpenseReducer";


const rootReducer = combineReducers({
    data: DataReducer,
    user: UserReducer,
    wallet: WalletReducer,
    walletTransaction: WalletTransactionReducer,
    currency: CurrencyReducer,
    expenseCategory: ExpenseCategoryReducer,
    expense: ExpenseReducer,
});

export default rootReducer;
