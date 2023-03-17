import { combineReducers, createStore } from "redux";
import { cardReducer } from "./cardReducer";
import { newCardReducer } from "./newCardReducer";


const reducers = combineReducers({
    Card : cardReducer,
    Board: newCardReducer

})

const store = createStore(reducers)


export default store;

window.store = store