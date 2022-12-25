import { createStore } from "redux";
import rootReducer from "./reducer/Index";
const store  =createStore(rootReducer);
console.log(store);
export default store;