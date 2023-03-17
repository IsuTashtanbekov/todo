import { combineReducers, createStore } from "redux";
import { newCardReducer } from "./newCardReducer";


const reducers = combineReducers({
    Board: newCardReducer

})

const store = createStore(reducers)


export default store;

window.store = store