import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donut/donutReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  donut: donutReducer,
  user: userReducer,
});

export default rootReducer;
