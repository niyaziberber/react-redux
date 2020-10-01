import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donut/donutReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    donut: donutReducer
})

export default rootReducer;