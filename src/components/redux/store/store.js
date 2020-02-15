import { createStore } from "redux";
import combined from "../reducers/reducers";


const store = createStore(combined , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;   