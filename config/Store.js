import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducers from "../src/redux/reducers/RootReducers";

const Store = createStore(RootReducers, applyMiddleware(thunk));

export default Store;
