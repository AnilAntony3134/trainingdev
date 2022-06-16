import { combineReducers } from "redux";
import amountreducer from "./amountReducer";

const reducers = combineReducers({
    amount : amountreducer
})

export default reducers 