import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import UserReducer from "./user/UserReducer";


const rootReducer = combineReducers({
    data: DataReducer,
    user: UserReducer
});

export default rootReducer;
